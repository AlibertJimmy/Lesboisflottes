import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

import '../../utils/style/react-day-picker.css'

import { useTranslation } from "react-i18next";


import ToggleButton from '../../components/ToggleButton/toggleButton'
import DayPickerFooter from '../../components/DayPickerFooter/dayPickerFooter'


const PricingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  //align-items: center;
`

const DatasWrapper = styled.div`
  border: solid 1px black ;
  border-radius: 15px;
  padding: 10px;
  margin-right:20px;
`

const DayPickerWrapper = styled.div`
  border: solid 1px black ;
  border-radius: 15px;
  padding: 10px;
  margin-left:20px;
`

const DaySelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid black;
`

const InnerDiv = styled.div`
  margin: 10px;
`

function Pricing() {

    const { t } = useTranslation();
    
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

  

    const disabledDays = [
      { from: new Date(2024, 0, 1), to: new Date(2024, 4, 16) },
      { from: new Date(2024, 9, 14), to: new Date(2024, 11, 31) }
    ]

    const modifiers = {
      lowSeason: [
        { from: new Date(2024, 4, 17), to: new Date(2024, 5, 13) },
        { from: new Date(2024, 8, 15), to: new Date(2024, 9, 13) }
      ],
      mediumSeason: [
        { from: new Date(2024, 5, 14), to: new Date(2024, 6, 4) },
        { from: new Date(2024, 8, 2), to: new Date(2024, 8, 14) }
      ],
      highSeason: [
        { from: new Date(2024, 6, 5), to: new Date(2024, 6, 11) },
        { from: new Date(2024, 7, 26), to: new Date(2024, 8, 1) }
      ],
      veryHighSeason: [
        { from: new Date(2024, 6, 12), to: new Date(2024, 7, 25) }
      ],


    }

    const modifiersStyles = {
      lowSeason: {
        color: 'white',
        backgroundColor: '#fcf25b',
      },
      mediumSeason: {
        color: 'white',
        backgroundColor: '#fac32a',
      },
      highSeason: {
        color: 'white',
        backgroundColor: '#f03535',
      },
      veryHighSeason: {
        color: 'white',
        backgroundColor: '#813afc',
      },
    }

    const css = `
      .my-selected:not([disabled]) { 
        font-weight: bold; 
        border: 2px solid #0c00fa;
      }
    `

  return (
      <PricingWrapper>
        <DatasWrapper>
          <h2>{t("selectNightTitle")}</h2>
          <DaySelectorWrapper>
            <InnerDiv>{t("singleNight")}</InnerDiv>
            <ToggleButton onToggle={switchDaySelection} selection={selection}/>
            <InnerDiv>{t("multipleNights")}</InnerDiv>
          </DaySelectorWrapper>
          <DayPickerFooter mode={selection} daySelection={selection === 'single' ? selectedDay : range} />
        </DatasWrapper>
        <DayPickerWrapper>
          <style>{css}</style>
          <DayPicker 
              mode={selection}
              selected={selection === 'single' ? selectedDay : range}
              onSelect={selection === 'single' ? setSelectedDay : setRange}
              defaultMonth={new Date(2024, 4)}
              
              disabled = {disabledDays}
              fromMonth={new Date(2024,4)}
              toMonth={new Date(2024,9)}
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
              modifiersClassNames={{
                selected: 'my-selected'
              }}
          />
        </DayPickerWrapper>
      </PricingWrapper>
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
