
import { parse, isBefore, addDays } from 'date-fns';

const colorCode = [
    {
        lowSeason: 'yellow',
        mediumSeason: 'orange',
        highSeason: 'red',
        veryHighSeason: 'violet'
    }
]

const pricingBySeasonList = [
	{
        seasonType: 'lowSeason',
        startDate:'17/05/2024',
        endDate: '13/06/2024',
        price: 65,
        color: colorCode.lowSeason
	},
    {
		seasonType: 'mediumSeason',
		startDate: '14/06/2024',
        endDate: '04/07/2024',
        price: 70,
        color: colorCode.mediumSeason
	},
    {
		seasonType: 'highSeason',
		startDate: '05/07/2024',
        endDate: '11/07/2024',
        price: 80,
        color: colorCode.highSeason
	},
    {
		seasonType: 'veryHighSeason',
		startDate: '12/07/2024',
        endDate: '25/08/2024',
        price: 90,
        color: colorCode.veryHighSeason
	},
    {
		seasonType: 'highSeason',
		startDate: '26/08/2024',
        endDate: '01/09/2024',
        price: 80,
        color: colorCode.highSeason
	},
    {
		seasonType: 'mediumSeason',
		startDate: '02/09/2024',
        endDate: '14/09/2024',
        price: 70,
        color: colorCode.mediumSeason
	},
    {
		seasonType: 'lowSeason',
		startDate: '15/09/2024',
        endDate: '13/10/2024',
        price: 65,
        color: colorCode.lowSeason
	}
]

export const getSeasonDatasForDate = (date) => {
    
    console.log(`date : ${date}`)
  
    for (const season of pricingBySeasonList) {
      const startDate = parse(season.startDate, 'dd/MM/yyyy', new Date());
      const endDate = parse(season.endDate, 'dd/MM/yyyy', new Date());
      //console.log(`startDate : ${startDate}`)
      //console.log(`endDate : ${endDate}`)
  
      if (date >= startDate && date <= endDate) {
        
        return season ;

      }
    }
  
    return 'Unknown Season'; // If no season matches the input date
  };
  
export const getPriceForRangeDay = (range) => {

    console.log(`range : ${range}`)
    const dates = getDatesBetween(range.from, range.to)
    let totalPrice = 0 ;
    for( const day in dates){
        //const date = parse(day, 'dd/MM/yyyy', new Date());
        console.log(`day : ${dates[day]}`)
        const dayPrice = getSeasonDatasForDate(dates[day]).price
        console.log(`dayPrice : ${dayPrice}`)
        totalPrice = totalPrice + dayPrice
    }

    return totalPrice ;
}

function getDatesBetween(from, to) {
    const dates = [];
    let currentDate = from;
  
    while (isBefore(currentDate, to)) {
      dates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    console.log(dates);
    return dates;
  }
  