// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

// Import PropType
import PropTypes from 'prop-types';

// Import Function
import { getPriceForRangeDay } from '../../../utils/functions/Pricing_Functions';
import { DayPickerInformationDisplayP, DayPickerInformationDisplayWrapper } from '../../../utils/style/js/Pricing_Style/DayPickerInformationDisplay_Style';

function DayPickerInformationDisplay ({ daySelection }) {
  const { t } = useTranslation();

  console.log('daySelection :', daySelection);

  let dayPickerInformation;
  if (daySelection === undefined) {
    dayPickerInformation = (
      <>
        <DayPickerInformationDisplayP>{t('ArrivingThe')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('DepartureThe')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('YouHaveSelected')} :</DayPickerInformationDisplayP>
        <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} :</DayPickerInformationDisplayP>
      </>
    );
  } else if (daySelection) {
    if (daySelection?.from && daySelection.to === undefined) {
      console.log('daySelection.from :', daySelection.from);
      dayPickerInformation = (
        <>
          <DayPickerInformationDisplayP>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('DepartureThe')} :</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('YouHaveSelected')} :</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} :</DayPickerInformationDisplayP>
        </>
      );
    } else if (daySelection?.from && daySelection?.to) {
      console.log('daySelection.from :', daySelection.from);
      dayPickerInformation = (
        <>
          <DayPickerInformationDisplayP>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('DepartureThe')} : {format(daySelection.to, 'dd/MM/yyyy')}.</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('YouHaveSelected')} {getPriceForRangeDay(daySelection).totalNights}{getPriceForRangeDay(daySelection).totalNights === 1 ? t('Night') : t('Nights')}</DayPickerInformationDisplayP>
          <DayPickerInformationDisplayP>{t('PriceOfTheJourney')} : {getPriceForRangeDay(daySelection).totalPrice} euros</DayPickerInformationDisplayP>
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

const DateRangeShape = PropTypes.shape({
  from: PropTypes.instanceOf(Date).isRequired,
  to: PropTypes.instanceOf(Date).isRequired
});

DayPickerInformationDisplay.propTypes = {
  mode: PropTypes.string.isRequired,
  daySelection: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    DateRangeShape
  ]).isRequired

};

export default DayPickerInformationDisplay;
