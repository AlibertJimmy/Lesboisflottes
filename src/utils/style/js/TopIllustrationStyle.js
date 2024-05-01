// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../constants/Global_Constants';

export const TopIllustrationImageContainer = styled.div`
  width: 100%;
  height: 41.67vw;
  position: relative;

`;

export const TopIllustrationImage = styled.img`
  width: 100%;
  height: 41.67vw;
`;

export const AbsolutePositionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 41.67vw;

  background-color: transparent ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const TopPageTitle = styled.h1`

  font-family: cursive;
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;

  color: ${colors.backgroundHeaderFooter};
  text-shadow: 
    -1px -1px 0 #FFF,  
    1px -1px 0 #FFF,  
    -1px 1px 0 #FFF,  
    1px 1px 0 #FFF; // Black outline


  @media (max-width: ${responsiveWidthTablet}px){
    font-size: 35px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    font-size: 25px;
  }
`;
