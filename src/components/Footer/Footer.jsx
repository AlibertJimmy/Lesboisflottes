// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Functions
import { scrollToTop } from '../../utils/functions/functions';

// Import Assets
import ArrowUp from '../../assets/icon/arrowUp.png';

// Import Style
import styled from 'styled-components';
import { StyledFooter } from '../../utils/style/jsx/style';

const StyledText = styled.div`
      display:flex;
      flex-direction: column;
      text-align:center;
`;

const StyledP = styled.p`
    font-size: 15px;
    margin: 5px;
`;

function Footer () {
  const { t } = useTranslation();

  const handleGoToTop = () => {
    scrollToTop();
  };

  return (
    <StyledFooter>
        <div></div>
        <StyledText>
            <StyledP>Copyright © 2023 Les Bois Flottés</StyledP>
            <StyledP>{t('WebSiteRealizedBy')}</StyledP>
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