// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import {
  GridWrapper, GridContainerRight,
  GridTwo, GridThree,
  GridSix, GridSeven,
  CategoryImg

} from '../../utils/style/js/GallerySampleGridStyle';

function GallerySampleGridRight () {
  console.log('photosSample');
  console.log(photosSample[0]);
  return (
    <GridWrapper id='gridWrapper'>
      <Link to="/Gallery">
        <GridContainerRight id='gridContainer'>
          <GridTwo id='gridTwo'>
              <CategoryImg src={photosSample[1].src} alt="img2" />
          </GridTwo>
          <GridThree id='gridThree'>
              <CategoryImg src={photosSample[2].src} alt="img3" />
          </GridThree>
          <GridSix id='gridSix'>
              <CategoryImg src={photosSample[5].src} alt="img6" />
          </GridSix>
          <GridSeven id='gridSeven'>
              <CategoryImg src={photosSample[6].src} alt="img7" />
          </GridSeven>
        </GridContainerRight>
      </Link>
    </GridWrapper>
  );
}

export default GallerySampleGridRight;

/*

        */
