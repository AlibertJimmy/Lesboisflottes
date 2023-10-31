import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react'

import { format } from 'date-fns'
import { fr, enUS} from 'date-fns/locale'

import { DayPicker } from 'react-day-picker'

import ToggleButton from '../../components/ToggleButton/toggleButton'
import DayPickerFooter from '../../components/Pricing/DayPickerFooter/dayPickerFooter'
import SeasonLegend from '../../components/Pricing/SeasonLegend/seasonLegend'
import InformationDisplay from '../../components/Pricing/Information/information'

// Import all the datas to customize the calendar
import { disabledDays, dateSeasonList, modifiersStyles } from '../../datas/pricing'

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/titles&text'
import { StyledH2 } from '../../utils/style/jsx/titles&text'

import '../../utils/style/css/react-day-picker.css'


const PricingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  //align-items: center;
`

const DataDisplayWrapper = styled.div`
  border: solid 1px black ;
  border-radius: 15px;
  padding: 10px;
`

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid black;
`

const DayPickerContainer = styled.div`
  border: solid 1px black ;
  border-radius: 15px;
  padding: 10px 20px;
  margin:0 20px;
`

const InnerDiv = styled.div`
  margin: 10px;
`

const LegendDisplayContainer = styled.div`
  border: solid 1px black ;
  border-radius: 15px;
  padding: 10px;
`

function Pricing() {
    
    const { i18n, t } = useTranslation();
    
    console.log(`language : ${i18n.language}`)
    /*
    let choosenLanguage ;
    if(i18n.language === 'en'){
      //choosenLanguage = en
      console.log('i18n.language = en')
    }
    else if(i18n.language === 'fr'){
      //choosenLanguage = fr
      console.log('i18n.language = fr')
    }
    */
    
    const currentDate = format(new Date(), 'dd/MM/yyyy')
    console.log(`Current Date is ${currentDate}`);

    const [selection, setAsSelection] = useState('single');
    
    const switchDaySelection = () => {
      setAsSelection(selection === 'single' ? 'range' : 'single');
      console.log(`selection : ${selection}`)
    }

    useEffect(() => {
      console.log(`selection : ${selection}`);
    }, [selection]);
    

    const [selectedDay, setSelectedDay] = useState();
    const [range, setRange] = useState();


    const css = `
      .my-selected:not([disabled]) { 
        font-weight: bold; 
        border: 2px solid #000000;
      }
    `

  return (
      <div>
        <StyledH1>{t("Prices")}</StyledH1>
        <PricingWrapper>

          <DataDisplayWrapper>
            <StyledH2>{t("SelectNightTitle")}</StyledH2>
            <ToggleButtonContainer>
              <InnerDiv>{t("SingleNight")}</InnerDiv>
              <ToggleButton onToggle={switchDaySelection} selection={selection} />
              <InnerDiv>{t("MultipleNights")}</InnerDiv>
            </ToggleButtonContainer>
            <DayPickerFooter mode={selection} daySelection={selection === 'single' ? selectedDay : range} />
          </DataDisplayWrapper>

          <DayPickerContainer>
            <style>{css}</style>
            <DayPicker
              mode={selection}
              selected={selection === 'single' ? selectedDay : range}
              onSelect={selection === 'single' ? setSelectedDay : setRange}
              defaultMonth={new Date(2024, 4)}

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

          <LegendDisplayContainer>
            <StyledH2>{t("Legend")}</StyledH2>
            <SeasonLegend />
          </LegendDisplayContainer>

        </PricingWrapper>

        <div>
            <InformationDisplay />
        </div>
      </div>
      
  )
}
// defaultMonth -> Set the starting month of the calendar
// if outside the season -> start at the begining of the the season

// change language display date -> check 
// formatRelative(subDays(new Date(), 3), new Date(), { locale: es })
//=> "el viernes pasado a las 19:26"


/*
export default function App() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}*/

export default Pricing
