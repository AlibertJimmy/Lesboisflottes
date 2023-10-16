import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

import '../../utils/style/react-day-picker.css'

import DateDisplay from '../../components/DateDisplay/datedisplay'
import ToggleButton from '../../components/ToggleButton/toggleButton'

const PricingWrapper = styled.div`
  text-align: center;
`


function Pricing() {
    
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

    const footer = selectedDay ? (
        <p>Vous avez choisis la nuit du {format(selectedDay, 'PPP')}.</p>
      ) : (
        <p>Veuillez selectionner une nuit.</p>
      );

    let footer2 = <p>Veuillez choisir votre jour d'arrivée.</p>;
    if (range?.from) {
      if (!range.to) {
        footer2 = <p>Arrivée le : {format(range.from, 'PPP')}</p>;
      } else if (range.to) {
        footer2 = (
          <div>
            <p>Arrivée le : {format(range.from, 'PPP')}.</p>
            <p>Départ le : {format(range.to, 'PPP')}.</p>
          </div>
        );
      }
    }

  return (
      <PricingWrapper>
        <DateDisplay currentDate={currentDate}/>
        <ToggleButton onToggle={switchDaySelection} selection={selection}/>
        <DayPicker 
            mode={selection}
            //selected={selectedDay}
            selected={selection === 'single' ? selectedDay : range}
            //onSelect={setSelectedDay}
            onSelect={selection === 'single' ? setSelectedDay : setRange}
            //footer={footer}
            footer={selection === 'single' ? footer : footer2}
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
