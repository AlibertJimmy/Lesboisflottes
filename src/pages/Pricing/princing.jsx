import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

import '../../utils/style/react-day-picker.css'


import DateDisplay from '../../components/DateDisplay/datedisplay'
import ToggleButton from '../../components/ToggleButton/toggleButton'

import { getSeasonDatasForDate,getPriceForRangeDay } from '../../datas/pricing'

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
        <div>
          <p>Vous avez choisis la nuit du {format(selectedDay, 'dd/MM/yyyy')}.</p>
          
          {/*<p>Tarif : {getSeasonDatasForDate(format(selectedDay, 'dd/MM/yyyy')).price} euros</p>*/}
          <p>Tarif : {getSeasonDatasForDate(selectedDay).price} euros</p>
        </div>
      ) : (
        <p>Veuillez selectionner une nuit.</p>
      );

    let footer2 = <p>Veuillez choisir votre jour d'arrivée.</p>;
    if (range?.from) {
      if (!range.to) {
        footer2 = <p>Arrivée le : {format(range.from, 'dd/MM/yyyy')}</p>;
      } else if (range.to) {
        footer2 = (
          <div>
            <p>Arrivée le : {format(range.from, 'dd/MM/yyyy')}.</p>
            <p>Départ le : {format(range.to, 'dd/MM/yyyy')}.</p>
            <p>Prix pour le séjour : {getPriceForRangeDay(range)} euros</p>
          </div>
        );
      }
    }

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
        <DateDisplay currentDate={currentDate}/>
        <ToggleButton onToggle={switchDaySelection} selection={selection}/>
        <style>{css}</style>
        <DayPicker 
            mode={selection}
            //selected={selectedDay}
            selected={selection === 'single' ? selectedDay : range}
            //onSelect={setSelectedDay}
            onSelect={selection === 'single' ? setSelectedDay : setRange}
            //footer={footer}
            footer={selection === 'single' ? footer : footer2}
            defaultMonth={new Date(2024, 4)}
            showOutsideDays
            disabled = {disabledDays}
            fromMonth={new Date(2024,4)}
            toMonth={new Date(2024,9)}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            modifiersClassNames={{
              selected: 'my-selected'
            }}
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
