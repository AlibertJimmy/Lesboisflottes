import styled from "styled-components"
import { format } from 'date-fns'

import { getSeasonDatasForDate,getPriceForRangeDay } from "../../functions/pricing";

import { useTranslation } from "react-i18next";




function DayPickerFooter({mode, daySelection}) {

    const { t } = useTranslation();

    console.log(`mode : ${mode}`);
    console.log(`daySelection : ${daySelection}`);
    console.log(daySelection)
    if(mode === 'range'){
        console.log('range selected');
        if (daySelection?.from) {
            console.log(daySelection.from)
        }
    }

    let footer = <p>{t("pleaseSelectOneNight")}</p>
    if(mode === 'single'){
        if(daySelection){
            footer = 
            <div>
            <p>{t("youSelectedTheNightOfThe")} {format(daySelection, 'dd/MM/yyyy')}.</p>
            <p>{t("pricing")} : {getSeasonDatasForDate(daySelection).price} euros</p>
        </div>
        }
    }
    

    let footer2 = <p>{t("pleaseSelectTheDayOfYourArrival")}</p>;
    if (daySelection?.from) {
        console.log('pass first condition');
      if (!daySelection.to) {
        console.log('pass second condition');
        footer2 = <p>{t("arrivingThe")} : {format(daySelection.from, 'dd/MM/yyyy')}</p>;
      }
      else if (daySelection.to) {
        console.log('pass third condition');
        footer2 = (
          <div>
            <p>{t("arrivingThe")} : {format(daySelection.from, 'dd/MM/yyyy')}.</p>
            <p>{t("departureThe")} : {format(daySelection.to, 'dd/MM/yyyy')}.</p>
            <p>{t("youHaveSelected")} {getPriceForRangeDay(daySelection).totalNights} {getPriceForRangeDay(daySelection).totalNights === 1 ? t("night") : t("nights")}</p>
            <p>{t("priceOfTheJourney")} : {getPriceForRangeDay(daySelection).totalPrice} euros</p>
          </div>
        );
      }
    }

    return (
        <div>
            {mode === 'single' ? footer : footer2}
        </div>
    )
  }
  
  export default DayPickerFooter