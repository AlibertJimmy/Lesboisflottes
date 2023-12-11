// Import React Libraries
import { isBefore, addDays } from 'date-fns';

// Import Datas
import { pricingBySeasonList } from '../../datas/pricing';

export const getSeasonDatasForDate = (date) => {
  console.log(`date : ${date}`);

  // Each season listed
  for (const season of pricingBySeasonList) {
    // console.log(`season : ${season.seasonType}`);

    // Each of the different period corresponding to one type of season
    for (const period of season.seasonDates) {
      const startDate = period.from;
      const endDate = period.to;
      // console.log(`startDate : ${startDate}`)
      // console.log(`endDate : ${endDate}`)

      if (date >= startDate && date <= endDate) {
        return season;
      }
    }
  }

  return 'Unknown Season';
};

export const getPriceForRangeDay = (range) => {
  console.log(`range : ${range}`);
  const dates = getDatesBetween(range.from, range.to);
  let totalPrice = 0;
  let totalNights = 0;
  for (const day in dates) {
    // const date = parse(day, 'dd/MM/yyyy', new Date());
    console.log(`day : ${dates[day]}`);
    const dayPrice = getSeasonDatasForDate(dates[day]).price;
    console.log(`dayPrice : ${dayPrice}`);
    totalPrice = totalPrice + dayPrice;
    totalNights = totalNights + 1;
  }

  return {
    totalPrice,
    totalNights
  };
};

function getDatesBetween (from, to) {
  const dates = [];
  let currentDate = from;

  while (isBefore(currentDate, to)) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  console.log(dates);
  return dates;
}


