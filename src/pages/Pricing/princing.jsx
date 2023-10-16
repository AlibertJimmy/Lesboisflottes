import { useState } from 'react'

import styled from 'styled-components'

import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

import '../../utils/style/react-day-picker.css'

import DateDisplay from '../../components/DateDisplay/datedisplay'


const PricingWrapper = styled.div`
  text-align: center;
`


function Pricing() {
    const [selectedDay, setSelectedDay] = useState();
    const currentDate = format(new Date(), 'dd/MM/yyyy')
    console.log(`Current Date is ${currentDate}`);
    

    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
      ) : (
        <p>Please pick a day.</p>
      );


  return (
      <PricingWrapper>
        <DateDisplay currentDate={currentDate}/>
        <DayPicker 
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            footer={footer}
            defaultMonth={new Date(2024, 4)}
        />
      </PricingWrapper>
  )
}
// defaultMonth -> Set the starting month of the calendar
// if outside the season -> start at the begining of the the season

// change language display date -> check 
// formatRelative(subDays(new Date(), 3), new Date(), { locale: es })
//=> "el viernes pasado a las 19:26"


export default Pricing
