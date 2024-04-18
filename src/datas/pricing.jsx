// Import custom colors
import colors from '../utils/colors/colors';

// Remember to substract 1 to the number of the month as date-fns months index start with January = 0
// Days disabled in the calendar
export const disabledDays = [
  { from: new Date(2024, 0, 1), to: new Date(2024, 4, 16) },
  { from: new Date(2024, 9, 14), to: new Date(2024, 11, 31) }
];

// Period of the different seasons
export const dateSeasonList = {
  lowSeason: [
    { from: new Date(2024, 4, 17), to: new Date(2024, 5, 13) },
    { from: new Date(2024, 8, 15), to: new Date(2024, 9, 13) }
  ],
  mediumSeason: [
    { from: new Date(2024, 5, 14), to: new Date(2024, 6, 4) },
    { from: new Date(2024, 7, 30), to: new Date(2024, 8, 14) }
  ],
  highSeason: [
    { from: new Date(2024, 6, 5), to: new Date(2024, 7, 29) }
  ]
};

// Pricing and colors of the differents seasons
export const pricingBySeasonList = [
  {
    seasonType: 'lowSeason',
    seasonDates: dateSeasonList.lowSeason,
    price: 65
  },
  {
    seasonType: 'mediumSeason',
    seasonDates: dateSeasonList.mediumSeason,
    price: 75
  },
  {
    seasonType: 'highSeason',
    seasonDates: dateSeasonList.highSeason,
    price: 90
  }
];

export const modifiersStyles = {
  lowSeason: {
    color: 'white',
    backgroundColor: colors.lowSeason
  },
  mediumSeason: {
    color: 'white',
    backgroundColor: colors.mediumSeason
  },
  highSeason: {
    color: 'white',
    backgroundColor: colors.highSeason
  }
};
