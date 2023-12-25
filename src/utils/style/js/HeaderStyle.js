// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled from 'styled-components';
import { commonLink, commonTitleStyle } from './style';

// Import Colors
import colors from '../colors';

// Import Constants
import { responsiveWidthTablet, responsiveWidthMobile } from '../../constants';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    position: fixed;
    top: 0;
    left:0;

    width: 100%;

    background: ${colors.backgroundHeaderFooter};

    z-index:99;
    
    @media (max-width: ${responsiveWidthTablet}px){
      padding-top: 5px;
    }
    @media (max-width: ${responsiveWidthMobile}px){
      padding-top: 50px;
    }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  text-align: center;

  @media (max-width: ${responsiveWidthTablet}px){
    height: 50px;
  }
`;

export const StyledLinkHeader = styled(Link)`
    ${commonTitleStyle};
    ${commonLink}
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin: 0 0 5px 0;
`;

export const StyledSubtitle = styled.h2`
  font-size: 20px;

  margin: 5px 0;
`;
