// Import Fonction
import { calculateAverageRating } from '../utils/functions/Comment';

// Import Datas
import { commentListFrAirBnB } from './review_AirBNB_fr';
import { commentListEnAirBnB } from './review_AirBNB_en';
import { commentListFrBooking } from './review_Booking_fr';
import { commentListEnBooking } from './review_Booking_en';

export const webSitesList = [
  {
    name: 'AirBnB',
    link: 'https://www.airbnb.com/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&locale=en&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso',
    reviewList:
      [
        { reviewListfr: commentListFrAirBnB.reviews },
        { reviewListen: commentListEnAirBnB.reviews }
      ],
    averageRating: calculateAverageRating(commentListFrAirBnB.reviews)
  },
  {
    name: 'Booking',
    link: 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.fr.html#tab-reviews',
    reviewList:
      [
        { reviewListfr: commentListFrBooking.reviews },
        { reviewListen: commentListEnBooking.reviews }
      ],
    averageRating: calculateAverageRating(commentListFrBooking.reviews)
  }
];
