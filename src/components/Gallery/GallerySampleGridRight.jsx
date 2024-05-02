// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import {
  GridWrapper, GridContainerRight
} from '../../utils/style/js/GallerySampleGridStyle';

import {
  GridTwo, GridThree,
  GridSix, GridSeven,
  GalleryImg
} from '../../utils/style/js/Gallery_Style';

function GallerySampleGridRight () {
  // console.log('photosSample');
  // console.log(photosSample[0]);
  return (
    <GridWrapper id='gridWrapper'>
      <Link to="/Gallery">
        <GridContainerRight id='gridContainer'>
          <GridTwo id='gridTwo'>
              <GalleryImg src={photosSample[1].src} alt="img2" />
          </GridTwo>
          <GridThree id='gridThree'>
              <GalleryImg src={photosSample[2].src} alt="img3" />
          </GridThree>
          <GridSix id='gridSix'>
              <GalleryImg src={photosSample[5].src} alt="img6" />
          </GridSix>
          <GridSeven id='gridSeven'>
              <GalleryImg src={photosSample[6].src} alt="img7" />
          </GridSeven>
        </GridContainerRight>
      </Link>
    </GridWrapper>
  );
}

export default GallerySampleGridRight;

/*

        */
