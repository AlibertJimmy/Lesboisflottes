// Import React Libraries
import React from 'react';

// Import Functions
import { scrollToTop } from '../../utils/functions/functions';

// Import Assets
import ArrowUp from '../../assets/icon/arrowUp.png';

// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../utils/style/jsx/style';

// Import Colors
import colors from '../../utils/style/jsx/colors';

const StyledFooter = styled.div`
    ${commonHeaderFooter};
    
    flex-direction: row;
    align-items:center;

    position: fixed;
    bottom:0;

    justify-content: space-between;

    height:55px;


    color: ${colors.link};

    button#goToTopButton {
        background-color: ${colors.backgroundHeaderFooter};
        border: none;
        padding: 10px 20px;
        cursor: pointer;
      }
`;

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
