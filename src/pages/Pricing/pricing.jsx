// Import react libraries
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { fr, enUS } from 'date-fns/locale';

import { DayPicker } from 'react-day-picker';

// Import Component
import ToggleButton from '../../components/ToggleButton/toggleButton';
import DayPickerFooter from '../../components/Pricing/DayPickerFooter/dayPickerFooter';
import SeasonLegend from '../../components/Pricing/SeasonLegend/seasonLegend';
import InformationDisplay from '../../components/Pricing/Information/information';

// Import Datas
import { disabledDays, dateSeasonList, modifiersStyles } from '../../datas/pricing';

// Import Style
import styled from 'styled-components';
import { PageWrapper, StyledH1, StyledH2, StyledContainer } from '../../utils/style/jsx/style';
import '../../utils/style/css/react-day-picker.css';

// Import Constants
import { borderWidth, marginBetweenPageComponent, responsiveWidthMobile } from '../../utils/style/jsx/constants';

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;

  margin: ${marginBetweenPageComponent}px 0;


  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction:column-reverse;
    padding: 0;
  }

  border: ${borderWidth}px solid black;
  border-radius: 15px;
`;

const DataDisplayWrapper = styled.div`

  padding: 10px;
  text-align: center;
  height: 250px;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  border: ${borderWidth}px solid black;
`;

const DayPickerContainer = styled.div`
  display: flex;
  justify-content:center;
  margin: ${marginBetweenPageComponent}px 0;


  border: ${borderWidth}px solid black;
  border-radius: 15px;

`;

const InnerDiv = styled.div`
  margin: 10px;
`;

const LegendDisplayContainer = styled.div`
  height: 250px;
  border: ${borderWidth}px solid black;
  border-radius: 15px;

  @media (max-width: ${responsiveWidthMobile}px){
    height: 210px;
  }
  
`;

function Pricing () {
  const { i18n, t } = useTranslation();
  const [selection, setAsSelection] = useState('single');
  const [numberOfMonthToDisplay, setNumberOfMonthToDisplay] = useState(1);
  const [selectedDay, setSelectedDay] = useState();
  const [range, setRange] = useState();

  // Ajouter une condition pour check si la valeur à copier est valide
  // Conserver le range dans un coin, si la date selectedDay est différente du range conservé
  // alors réinitialiser le range avec pour date de départ le selectedDay
  // sinon le garder
  const switchDaySelection = () => {
    if (selection === 'single') {
      // transfer the selectedDay to the first day of the range
      if (selectedDay !== undefined) {
        const newRange = {
          from: new Date(selectedDay)
        };
        setRange(newRange);
        console.log(range);
      }
    } else if (selection === 'range') {
      if (range !== undefined) {
        // copy the starting day of the range into selectedDay
        setSelectedDay(range.from);
      }
    }
    setAsSelection(selection === 'single' ? 'range' : 'single');
  };

  useEffect(() => {
    console.log('useEffect depending on range');
    console.log('range');
    console.log(range);
  }, [range]);

  const setNewRange = (date) => {
    if (range !== undefined) {
      if (range.from !== undefined && range.to !== undefined) {
        // Reset the range
        setRange(undefined);
      } else {
        // Set the range
        setRange(date);
      }
    } else if (range === undefined) {
      // Set the range
      setRange(date);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setNumberOfMonthToDisplay(screenWidth >= 725 ? 2 : 1);
    };

    // Initial setup
    handleResize();

    // Add event listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const css = `
      .my-selected:not([disabled]) { 
        font-weight: bold; 
        border: 2px solid #000000;
      }
    `;

  return (
      <PageWrapper>
        <StyledContainer>
          <StyledH1>{t('Prices')}</StyledH1>
        </StyledContainer>

        <InformationContainer>

          <DataDisplayWrapper>
            <StyledH2>{t('SelectNightTitle')}</StyledH2>
            <ToggleButtonContainer>
              <InnerDiv>{t('SingleNight')}</InnerDiv>
              <ToggleButton onToggle={switchDaySelection} selection={selection} />
              <InnerDiv>{t('MultipleNights')}</InnerDiv>
            </ToggleButtonContainer>
            <DayPickerFooter mode={selection} daySelection={selection === 'single' ? selectedDay : range} />
          </DataDisplayWrapper>

          <LegendDisplayContainer>
            <SeasonLegend />
          </LegendDisplayContainer>

        </InformationContainer>

        <DayPickerContainer>
          <style>{css}</style>
          <DayPicker
            mode={selection}
            selected={selection === 'single' ? selectedDay : range}
            onSelect={selection === 'single' ? setSelectedDay : setNewRange}
            numberOfMonths={numberOfMonthToDisplay}

            disabled={disabledDays}
            fromMonth={new Date(2024, 4)}
            toMonth={new Date(2024, 9)}
            modifiers={dateSeasonList}
            modifiersStyles={modifiersStyles}
            modifiersClassNames={{
              selected: 'my-selected'
            }}
            locale={i18n.language === 'en' ? enUS : fr} />
        </DayPickerContainer>

        <InformationDisplay />

      </PageWrapper>

  );
}

export default Pricing;
