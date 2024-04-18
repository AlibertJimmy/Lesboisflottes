// Import React Librairies
import React from 'react';
//  Import Asset
import LogoPNG from '../../../assets/logo/Logo.png';

// Import Style
import { SizedIMG } from '../../../utils/style/js/LogoStyles';

function Logo () {
  return (
        <div id='logoContainer'>
          <SizedIMG src={LogoPNG} alt='Logo'></SizedIMG>
        </div>
  );
}

export default Logo;
