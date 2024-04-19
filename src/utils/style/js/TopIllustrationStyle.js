// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { topIllustrationHeight } from '../../constants/TopIllustration_Constants';

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

  border: 1px solid red;
`;

export const TopPageTitle = styled.h1`

  font-family: cursive;
  color: ${colors.navLinks};
  text-transform: uppercase;
  font-size: 50px;
  transform: translate(0%, calc(${topIllustrationHeight}px * 0.05));
  text-align: center;
`;
