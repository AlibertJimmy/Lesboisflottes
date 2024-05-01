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
  DayPickerInformationDisplayWrapper,
  DayPickerInformationDisplayP
} from '../../../utils/style/js/Pricing_Style/DayPickerInformationDisplay_Style';

function DayPickerInformationDisplay () {
  const { t } = useTranslation();

  const { range } = useDayPickerContext();

  console.log('daySelection :', range);

  let dayPickerInformation;
  if (range === undefined || (range.from === undefined && range.to === undefined)) {
    dayPickerInformation = (
      <>
        <DayPickerInformationDisplayP>{t('ArrivingThe')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('DepartureThe')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('YouHaveSelected')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} :</DayPickerInformationDisplayP>
      </>
    );
  } else if (range) {
    if (range?.from && range.to === undefined) {
      console.log('daySelection.from :', range.from);
      dayPickerInformation = (
        <>
          <DayPickerInformationDisplayP>{t('ArrivingThe')} : {format(range.from, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('DepartureThe')} :</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('YouHaveSelected')} :</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} :</DayPickerInformationDisplayP>
        </>
      );
    } else if (range?.from && range?.to) {
      console.log('daySelection.from :', range.from);
      dayPickerInformation = (
        <>
          <DayPickerInformationDisplayP>{t('ArrivingThe')} : {format(range.from, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('DepartureThe')} : {format(range.to, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('YouHaveSelected')} {getPriceForRangeDay(range).totalNights}{getPriceForRangeDay(range).totalNights === 1 ? t('Night') : t('Nights')}</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} : {getPriceForRangeDay(range).totalPrice} euros</DayPickerInformationDisplayP>
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
