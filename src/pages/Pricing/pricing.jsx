// Import react libraries
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
import { pricesPageContent } from '../../datas/pageContent/pricesPageContent';

// Import Style
import '../../utils/style/css/react-day-picker.css';
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { DataDisplayWrapper, DayPickerContainer, InnerDiv, SelectionInformationWrapper, ToggleButtonContainer } from '../../utils/style/js/PricingStyle';
import { PageTitle, PageSubtitle } from '../../utils/style/js/Font_Style';

function Pricing () {
  const { i18n, t } = useTranslation();
  const [selection, setAsSelection] = useState('single');
  const [numberOfMonthToDisplay, setNumberOfMonthToDisplay] = useState(1);
  const [selectedDay, setSelectedDay] = useState();
  const [range, setRange] = useState();

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

  const setNewRange = (date) => {
    console.log('setNewRange');
    if (range !== undefined) {
      if (range.from !== undefined && range.to !== undefined) {
        // Reset the range
        console.log('reset the range');
        const dateToSave = {
          from: undefined,
          to: undefined
        };
        if (date !== undefined) {
          if (date.from < range.from) {
            dateToSave.from = date.from;
          } else if (date.to > range.to) {
            dateToSave.from = date.to;
          }
        }
        setRange(dateToSave);
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
    <>
    <Helmet>
        <title>{t(`${pricesPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${pricesPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
      <PageWrapper id='pricingPageWrapper'>
          <PageTitle>{t('Prices')}</PageTitle>

        <SelectionInformationWrapper id='selectionInformationWrapper'>
          <DataDisplayWrapper id='dataDisplayWrapper'>
            <PageSubtitle>{t('SelectNightTitle')}</PageSubtitle>
            <ToggleButtonContainer>
              <InnerDiv>{t('SingleNight')}</InnerDiv>
              <ToggleButton onToggle={switchDaySelection} selection={selection} />
              <InnerDiv>{t('MultipleNights')}</InnerDiv>
            </ToggleButtonContainer>
            <DayPickerFooter mode={selection} daySelection={selection === 'single' ? selectedDay : range} />
          </DataDisplayWrapper>

          <SeasonLegend />
        </SelectionInformationWrapper>

        <DayPickerContainer id='dayPickerContainer'>
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
      </>
  );
}

export default Pricing;
