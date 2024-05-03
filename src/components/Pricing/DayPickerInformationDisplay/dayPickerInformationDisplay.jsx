// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

// Import Context
import { useDayPickerContext } from '../../../context/DayPickerContext';

// Import Function
import { getPriceForRangeDay } from '../../../utils/functions/Pricing_Functions';

// Import Style
import {
  DayPickerInformationDisplayWrapper
} from '../../../utils/style/js/Pricing_Style/DayPickerInformationDisplay_Style';
import { StyledP } from '../../../utils/style/js/Font_Style';

function DayPickerInformationDisplay () {
  const { t } = useTranslation();

  const { range } = useDayPickerContext();

  // console.log('daySelection :', range);

  let dayPickerInformation;
  if (range === undefined || (range.from === undefined && range.to === undefined)) {
    dayPickerInformation = (
      <>
        <StyledP>{t('ArrivingThe')} :</StyledP>
        <StyledP>{t('DepartureThe')} :</StyledP>
        <StyledP>{t('YouHaveSelected')} :</StyledP>
        <StyledP>{t('PriceOfTheJourney')} :</StyledP>
      </>
    );
  } else if (range) {
    if (range?.from && range.to === undefined) {
      console.log('daySelection.from :', range.from);
      dayPickerInformation = (
        <>
          <StyledP>{t('ArrivingThe')} : {format(range.from, 'dd/MM/yyyy')}.</StyledP>
          <StyledP>{t('DepartureThe')} :</StyledP>
          <StyledP>{t('YouHaveSelected')} :</StyledP>
          <StyledP>{t('PriceOfTheJourney')} :</StyledP>
        </>
      );
    } else if (range?.from && range?.to) {
      console.log('daySelection.from :', range.from);
      dayPickerInformation = (
        <>
          <StyledP>{t('ArrivingThe')} : {format(range.from, 'dd/MM/yyyy')}.</StyledP>
          <StyledP>{t('DepartureThe')} : {format(range.to, 'dd/MM/yyyy')}.</StyledP>
          <StyledP>{t('YouHaveSelected')} {getPriceForRangeDay(range).totalNights}{getPriceForRangeDay(range).totalNights === 1 ? t('Night') : t('Nights')}</StyledP>
          <StyledP>{t('PriceOfTheJourney')} : <b>{getPriceForRangeDay(range).totalPrice}</b>  €</StyledP>
        </>
      );
    }
  }

  return (
    <DayPickerInformationDisplayWrapper id='dayPickerInformationDisplayWrapper'>
      {dayPickerInformation}
    </DayPickerInformationDisplayWrapper>
  );
}

export default DayPickerInformationDisplay;
