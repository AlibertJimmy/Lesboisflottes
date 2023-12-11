// Import React Libraries
import React from 'react';

// Import Functions
import { scrollToTop } from '../../utils/functions/functions';

// Import Assets
import ArrowUp from '../../assets/icon/arrowUp.png';
import { StyledFooter, StyledP, StyledText } from '../../utils/style/jsx/Footer';

function Footer () {
  const handleGoToTop = () => {
    scrollToTop();
  };

  return (
    <StyledFooter>
        <div></div>
        <StyledText>
            <StyledP>Copyright © 2023 Les Bois Flottés</StyledP>
        </StyledText>
        <div>
            <button id="goToTopButton" onClick={handleGoToTop}>
            <img src={ArrowUp} alt='arrowUp' style={{ height: '20px', width: '20px' }}></img>
            </button>
        </div>
    </StyledFooter>
  );
}

export default Footer;
