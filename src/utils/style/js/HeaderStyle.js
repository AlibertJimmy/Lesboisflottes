// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import {
  responsiveWidthTablet, responsiveWidthMobile,
  headerHeight, navBarHeight, titleContainerHeight, titleContainerHeightResponsive
} from '../../constants';
import { Link } from 'react-router-dom';
import { commonTitleStyle } from './GlobalStyle';
import { CommonLink } from './LinkStyle';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    position: fixed;
    top: 0;
    left:0;

    width: 100%;
    height: ${headerHeight}px;

    background: ${colors.backgroundHeaderFooter};

    z-index:99;
    
    @media (max-width: ${responsiveWidthTablet}px){
      padding-top: 5px;
    }
    @media (max-width: ${responsiveWidthMobile}px){
      padding-top: ${navBarHeight}px;
    }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: ${titleContainerHeight}px;

  text-align: center;

  @media (max-width: ${responsiveWidthTablet}px){
    height: ${titleContainerHeightResponsive}px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin: 0 0 5px 0;
`;

export const HeaderLink = styled(Link)`
  ${commonTitleStyle};
  ${CommonLink};
`;

export const StyledSubtitle = styled.h2`
  font-size: 20px;

  margin: 2px 0;
`;
