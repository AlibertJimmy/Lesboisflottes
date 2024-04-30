// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

// Import PropType
import PropTypes from 'prop-types';

// Import Function
import { getPriceForRangeDay } from '../../../utils/functions/Pricing_Functions';

function DayPickerFooter ({ daySelection }) {
  const { t } = useTranslation();

  console.log('daySelection :', daySelection);

  let footer;
  if (daySelection === undefined) {
    footer = (
      <>
        <p>{t('ArrivingThe')} :</p>
        <p>{t('DepartureThe')} :</p>
      </>
    );
  } else if (daySelection) {
    if (daySelection?.from && daySelection.to === undefined) {
      console.log('daySelection.from :', daySelection.from);
      footer = (
        <>
          <p>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}.</p>
          <p>{t('DepartureThe')} :</p>
        </>
      );
    } else if (daySelection?.from && daySelection?.to) {
      console.log('daySelection.from :', daySelection.from);
      footer = (
        <>
          <p>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}.</p>
          <p>{t('DepartureThe')} : {format(daySelection.to, 'dd/MM/yyyy')}.</p>
          <p>{t('YouHaveSelected')} {getPriceForRangeDay(daySelection).totalNights}{getPriceForRangeDay(daySelection).totalNights === 1 ? t('Night') : t('Nights')}</p>
          <p>{t('PriceOfTheJourney')} : {getPriceForRangeDay(daySelection).totalPrice} euros</p>
        </>
      );
    }
  }

  return footer;
}

const DateRangeShape = PropTypes.shape({
  from: PropTypes.instanceOf(Date).isRequired,
  to: PropTypes.instanceOf(Date).isRequired
});

DayPickerFooter.propTypes = {
  mode: PropTypes.string.isRequired,
  daySelection: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    DateRangeShape
  ]).isRequired

};

export default DayPickerFooter;
