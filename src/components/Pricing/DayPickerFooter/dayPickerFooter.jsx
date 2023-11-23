// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

// Import PropType
import PropTypes from 'prop-types';

// Import Datas
import { getSeasonDatasForDate, getPriceForRangeDay } from '../../../utils/functions/functions';

function DayPickerFooter ({ mode, daySelection }) {
  const { t } = useTranslation();

  // console.log(`mode : ${mode}`);
  // console.log(`daySelection : ${daySelection}`);
  // console.log(daySelection);
  if (mode === 'range') {
    // console.log('range selected');
    if (daySelection?.from) {
      // console.log(daySelection.from)
    }
  }

  let footer = <p>{t('PleaseSelectOneNight')}</p>;
  if (mode === 'single') {
    if (daySelection) {
      footer =
            <div>
            <p>{t('YouSelectedTheNightOfThe')} {format(daySelection, 'dd/MM/yyyy')}.</p>
            <p>{t('Prices')} : {getSeasonDatasForDate(daySelection).price} euros</p>
        </div>;
    }
  }

  let footer2 = <p>{t('PleaseSelectTheDayOfYourArrival')}</p>;
  if (daySelection?.from) {
    if (!daySelection.to) {
      footer2 = <p>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}</p>;
    } else if (daySelection.to) {
      footer2 = (
          <div>
            <p>{t('ArrivingThe')} : {format(daySelection.from, 'dd/MM/yyyy')}.</p>
            <p>{t('DepartureThe')} : {format(daySelection.to, 'dd/MM/yyyy')}.</p>
            <p>{t('YouHaveSelected')} {getPriceForRangeDay(daySelection).totalNights}
               {getPriceForRangeDay(daySelection).totalNights === 1 ? t('Night') : t('Nights')}</p>
            <p>{t('PriceOfTheJourney')} : {getPriceForRangeDay(daySelection).totalPrice} euros</p>
          </div>
      );
    }
  }

  return (
        <div>
            {mode === 'single' ? footer : footer2}
        </div>
  );
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
