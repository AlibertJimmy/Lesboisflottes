// Import PropTypes
import PropTypes from 'prop-types';

// Import Assets
import HousingPatioPhoto1 from '../assets/photos/patio_photos/Housing_Patio_Photo_1.jpg';
import HousingPatioPhoto2 from '../assets/photos/patio_photos/Housing_Patio_Photo_2.jpg';
import HousingPatioPhoto3 from '../assets/photos/patio_photos/Housing_Patio_Photo_3.jpg';

export const housingPatioPhotos = [
  {
    src: HousingPatioPhoto1
  },
  {
    src: HousingPatioPhoto2
  },
  {
    src: HousingPatioPhoto3
  }
];

export const PhotoPropTypes = PropTypes.shape({
  src: PropTypes.string.isRequired
});

export const PhotosPropTypes = PropTypes.arrayOf(PhotoPropTypes).isRequired;
