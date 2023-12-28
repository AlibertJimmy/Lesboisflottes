// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import {
  GridWrapper, GridContainerLeft,
  GridOne,
  GridFour, GridFive,
  CategoryImg

} from '../../utils/style/js/GallerySampleGridStyle';

function GallerySampleGridLeft () {
  console.log('photosSample');
  console.log(photosSample[0]);
  return (
    <GridWrapper id='gridWrapper'>
      <Link to="/Gallery">
        <GridContainerLeft id='gridContainer'>
          <GridOne id='gridOne'>
              <CategoryImg src={photosSample[0].src} alt="img1" />
          </GridOne>
          <GridFour id='gridFour'>
              <CategoryImg src={photosSample[3].src} alt="img4" />
          </GridFour>
          <GridFive id='gridFive'>
              <CategoryImg src={photosSample[7].src} alt="img5" />
          </GridFive>
        </GridContainerLeft>
      </Link>
    </GridWrapper>
  );
}

export default GallerySampleGridLeft;

/*

        */
