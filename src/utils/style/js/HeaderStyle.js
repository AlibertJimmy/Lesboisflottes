// Import Style
import styled from 'styled-components';
import { commonHeaderFooter } from '../../../utils/style/js/GlobalStyles';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { headerHeight, horizontalMargin, zIndexHeader } from '../../constants/Global_Constants';

const sideMargin = 20;

export const HeaderWrapper = styled.div`
  ${commonHeaderFooter};
  display: flex;

  justify-content: space-between;

  position: fixed;
  top: 0;

  height: ${headerHeight}px;
  
  color: black;
  background-color: ${colors.headerBackGround};

  z-index: ${zIndexHeader};

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
  background-color: ${({ isScrolled }) => (isScrolled ? `${colors.backgroundHeaderFooter}` : `${colors.backgroundHeaderFooter}`)};
  color: ${({ isScrolled }) => (isScrolled ? 'black' : 'white')};

`;

export const LogoDiv = styled.div`

  margin-left: ${sideMargin}px;

`;

export const NavBarDiv = styled.div`
  margin-right: ${horizontalMargin}px;

  box-sizing: border-box;
`;
