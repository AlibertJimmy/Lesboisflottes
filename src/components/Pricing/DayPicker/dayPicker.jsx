// Import react libraries
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { fr, enUS } from 'date-fns/locale';

import { DayPicker } from 'react-day-picker';

// Import Context
import { useDayPickerContext } from '../../../context/DayPickerContext';

// Import Datas
import { disabledDays, dateSeasonList, modifiersStyles } from '../../../datas/pricing';

// Import Style
import '../../../utils/style/css/react-day-picker.css';
import { DayPickerContainer } from '../../../utils/style/js/Pricing_Style/PricingStyle';

function DayPickerComponent () {
  const { i18n } = useTranslation();
  const [numberOfMonthToDisplay, setNumberOfMonthToDisplay] = useState(1);
  const { range, setRange } = useDayPickerContext();

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

    <DayPickerContainer id='dayPickerContainer'>
      <style>{css}</style>
      <DayPicker
        mode={'range'}
        selected={range}
        onSelect={setNewRange}
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

  );
}

export default DayPickerComponent;
