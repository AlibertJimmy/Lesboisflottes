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
    linken: 'https://www.airbnb.com/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&locale=en&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso',
    linkfr: 'https://www.airbnb.fr/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&enable_auto_translate=false&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso',
    reviewListfr: commentListFrAirBnB.reviews,
    reviewListen: commentListEnAirBnB.reviews,
    averageRating: calculateAverageRating(commentListFrAirBnB.reviews)
  },
  {
    name: 'Booking',
    linken: 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.html?lang=en-us&soz=1&lang_changed=1#tab-reviews',
    linkfr: 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.fr.html#tab-reviews',
    reviewListfr: commentListFrBooking.reviews,
    reviewListen: commentListEnBooking.reviews,
    averageRating: calculateAverageRating(commentListFrBooking.reviews)
  }
];
