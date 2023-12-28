// Import PropTypes
import PropTypes from 'prop-types';

// Import Assets
import Picture1 from '../assets/photos/pic1.png';
import Picture2 from '../assets/photos/pic2.png';
import Picture3 from '../assets/photos/pic3.png';
import Picture4 from '../assets/photos/pic4.png';
import Picture5 from '../assets/photos/pic5.png';
import Picture6 from '../assets/photos/pic6.png';
import Picture7 from '../assets/photos/pic7.png';
import Picture8 from '../assets/photos/pic8.png';
import Picture9 from '../assets/photos/pic9.png';
import Picture10 from '../assets/photos/pic10.png';

import Picture11 from '../assets/photos/pic11.png';
import Picture12 from '../assets/photos/pic12.png';
import Picture13 from '../assets/photos/pic13.png';
import Picture14 from '../assets/photos/pic14.png';
import Picture15 from '../assets/photos/pic15.png';
import Picture16 from '../assets/photos/pic16.png';
import Picture17 from '../assets/photos/pic17.png';
import Picture18 from '../assets/photos/pic18.png';
import Picture19 from '../assets/photos/pic19.png';
import Picture20 from '../assets/photos/pic20.png';

import Picture21 from '../assets/photos/pic21.png';
import Picture22 from '../assets/photos/pic22.png';
import Picture23 from '../assets/photos/pic23.png';
import Picture24 from '../assets/photos/pic24.png';
import Picture25 from '../assets/photos/pic25.png';
import Picture26 from '../assets/photos/pic26.png';
import Picture27 from '../assets/photos/pic27.png';
import Picture28 from '../assets/photos/pic28.png';
import Picture29 from '../assets/photos/pic29.png';
import Picture30 from '../assets/photos/pic30.png';

const photos = [
  {
    src: Picture1,
    width: 2,
    height: 1
  },
  {
    src: Picture2,
    width: 2,
    height: 1
  },
  {
    src: Picture3,
    width: 2,
    height: 1
  },
  {
    src: Picture4,
    width: 2,
    height: 1
  },
  {
    src: Picture5,
    width: 1,
    height: 2
  },
  {
    src: Picture6,
    width: 2,
    height: 1
  },
  {
    src: Picture7,
    width: 1,
    height: 2
  },
  {
    src: Picture8,
    width: 1,
    height: 1
  },
  {
    src: Picture9,
    width: 1,
    height: 1
  },
  {
    src: Picture10,
    width: 2,
    height: 1
  },
  {
    src: Picture11,
    width: 2,
    height: 1
  },
  {
    src: Picture12,
    width: 2,
    height: 1
  },
  {
    src: Picture13,
    width: 1,
    height: 1
  },
  {
    src: Picture14,
    width: 2,
    height: 1
  },
  {
    src: Picture15,
    width: 2,
    height: 1
  },
  {
    src: Picture16,
    width: 1,
    height: 1
  },
  {
    src: Picture17,
    width: 2,
    height: 1
  },
  {
    src: Picture18,
    width: 2,
    height: 1
  },
  {
    src: Picture19,
    width: 2,
    height: 1
  },
  {
    src: Picture20,
    width: 2,
    height: 1
  },

  {
    src: Picture21,
    width: 1,
    height: 2
  },
  {
    src: Picture22,
    width: 2,
    height: 1
  },
  {
    src: Picture23,
    width: 2,
    height: 1
  },
  {
    src: Picture24,
    width: 2,
    height: 1
  },
  {
    src: Picture25,
    width: 1,
    height: 2
  },
  {
    src: Picture26,
    width: 2,
    height: 1
  },
  {
    src: Picture27,
    width: 2,
    height: 1
  },
  {
    src: Picture28,
    width: 2,
    height: 1
  },
  {
    src: Picture29,
    width: 1,
    height: 2
  },
  {
    src: Picture30,
    width: 1,
    height: 2
  }
];

export { photos };

const photosSample = [
  {
    src: Picture22
  },
  {
    src: Picture4
  },
  {
    src: Picture3
  },
  {
    src: Picture9
  },
  {
    src: Picture1
  },
  {
    src: Picture6
  },
  {
    src: Picture2
  },
  {
    src: Picture16
  }

];

export { photosSample };

export const PhotoPropTypes = PropTypes.shape({
  src: PropTypes.string.isRequired
});

export const PhotosPropTypes = PropTypes.arrayOf(PhotoPropTypes).isRequired;
