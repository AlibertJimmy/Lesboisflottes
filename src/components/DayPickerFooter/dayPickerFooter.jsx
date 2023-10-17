import styled from "styled-components"
import { format } from 'date-fns'

import { getSeasonDatasForDate,getPriceForRangeDay } from "../../datas/pricing";




function DayPickerFooter({mode, daySelection}) {

    console.log(`mode : ${mode}`);
    console.log(`daySelection : ${daySelection}`);
    console.log(daySelection)
    if(mode === 'range'){
        console.log('range selected');
        if (daySelection?.from) {
            console.log(daySelection.from)
        }
    }

    let footer = <p>Veuillez selectionner une nuit.</p>
    if(mode === 'single'){
        if(daySelection){
            footer = 
            <div>
            <p>Vous avez choisis la nuit du {format(daySelection, 'dd/MM/yyyy')}.</p>
            
            <p>Tarif : {getSeasonDatasForDate(daySelection).price} euros</p>
        </div>
        }
    }
    

    let footer2 = <p>Veuillez choisir votre jour d'arrivée.</p>;
    if (daySelection?.from) {
        console.log('pass first condition');
      if (!daySelection.to) {
        console.log('pass second condition');
        footer2 = <p>Arrivée le : {format(daySelection.from, 'dd/MM/yyyy')}</p>;
      }
      else if (daySelection.to) {
        console.log('pass third condition');
        footer2 = (
          <div>
            <p>Arrivée le : {format(daySelection.from, 'dd/MM/yyyy')}.</p>
            <p>Départ le : {format(daySelection.to, 'dd/MM/yyyy')}.</p>
            <p>Prix pour le séjour : {getPriceForRangeDay(daySelection)} euros</p>
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