// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import {
  GridWrapper, GridContainerResponsive

} from '../../utils/style/js/GallerySampleGridStyle';

import {
  GridOne, GridTwo, GridThree,
  GridFour, GridFive,
  GridSix, GridSeven,
  GalleryImg

} from '../../utils/style/js/Gallery_Style';

function GallerySampleGridResponsive () {
  console.log('photosSample');
  console.log(photosSample[0]);
  return (
    <GridWrapper id='gridWrapper'>
      <Link to="/Gallery">
        <GridContainerResponsive id='gridContainer'>
          <GridOne id='gridOne'>
              <GalleryImg src={photosSample[0].src} alt="img1" />
          </GridOne>
          <GridTwo id='gridTwo'>
              <GalleryImg src={photosSample[1].src} alt="img2" />
          </GridTwo>
          <GridThree id='gridThree'>
              <GalleryImg src={photosSample[2].src} alt="img3" />
          </GridThree>
          <GridFour id='gridFour'>
              <GalleryImg src={photosSample[3].src} alt="img4" />
          </GridFour>
          <GridFive id='gridFive'>
              <GalleryImg src={photosSample[4].src} alt="img5" />
          </GridFive>
          <GridSix id='gridSix'>
              <GalleryImg src={photosSample[5].src} alt="img6" />
          </GridSix>
          <GridSeven id='gridSeven'>
              <GalleryImg src={photosSample[6].src} alt="img7" />
          </GridSeven>
        </GridContainerResponsive>
      </Link>
    </GridWrapper>
  );
}

export default GallerySampleGridResponsive;

/*

        */
