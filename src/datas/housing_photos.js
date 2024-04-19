// Import PropTypes
import PropTypes from 'prop-types';

// Import Assets
import HousingPhoto1 from '../assets/photos/housing_photos/Housing_Photo_1.jpg';
import HousingPhoto2 from '../assets/photos/housing_photos/Housing_Photo_2.jpg';
import HousingPhoto3 from '../assets/photos/housing_photos/Housing_Photo_3.jpg';
import HousingPhoto4 from '../assets/photos/housing_photos/Housing_Photo_4.jpg';
import HousingPhoto5 from '../assets/photos/housing_photos/Housing_Photo_5.jpg';
import HousingPhoto6 from '../assets/photos/housing_photos/Housing_Photo_6.jpg';
import HousingPhoto7 from '../assets/photos/housing_photos/Housing_Photo_7.jpg';

export const housingPhotos = [
  {
    src: HousingPhoto1
  },
  {
    src: HousingPhoto2
  },
  {
    src: HousingPhoto3
  },
  {
    src: HousingPhoto4
  },
  {
    src: HousingPhoto5
  },
  {
    src: HousingPhoto6
  },
  {
    src: HousingPhoto7
  }

];

export const PhotoPropTypes = PropTypes.shape({
  src: PropTypes.string.isRequired
});

export const PhotosPropTypes = PropTypes.arrayOf(PhotoPropTypes).isRequired;
