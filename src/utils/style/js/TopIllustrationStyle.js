// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { topIllustrationHeight } from '../../constants/TopIllustration_Constants';
import { responsiveWidthMobile, responsiveWidthTablet } from '../../constants/Global_Constants';

export const TopIllustrationImageContainer = styled.div`
  width: 100%;
  height: ${topIllustrationHeight}px;
  position: relative;

`;

export const TopIllustrationImage = styled.img`
  width: 100%;
  height: ${topIllustrationHeight}px;
`;

export const AbsolutePositionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${topIllustrationHeight}px;

  background-color: transparent ;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TopPageTitle = styled.h1`

  font-family: cursive;
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;

  color: ${colors.navLinks};

  transform: translate(0%, calc(${topIllustrationHeight}px * 0.05));

  @media (max-width: ${responsiveWidthTablet}px){
    font-size: 35px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    font-size: 25px;
    transform: translate(0%, calc(${topIllustrationHeight}px * -0.05));
  }
`;
