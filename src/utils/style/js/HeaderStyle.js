// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';
import { commonLink, commonTitleStyle } from './style';

// Import Colors
import colors from '../colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet, headerHeight, headerHeightResponsive } from '../../constants';

export const StyledLinkHeader = styled(Link)`
    ${commonTitleStyle};
    ${commonLink}
`;

export const StyledLinkSidebar = styled(Link)`
    ${commonTitleStyle};
    ${commonLink};
    font-size: 20px;    

    margin-bottom: 10px;
`;

export const StyledWelcome = styled.h1`

    ${commonTitleStyle};
    font-size: 40px;

    color: ${colors.title} ;

    text-align: center;
`;

// Header & Footer
export const commonHeaderFooter = css`
    display: flex;
    width: 100%;

    background: ${colors.backgroundHeaderFooter};
`;
export const HeaderWrapper = styled.div`
    ${commonHeaderFooter};

    flex-direction: column;
    
    position: fixed;
    top: 0;
    left:0;
    z-index:99;

    height: ${headerHeight}px;
    
    @media (max-width: ${responsiveWidthTablet}px){
      padding-top: 5px;
    }
    @media (max-width: ${responsiveWidthMobile}px){
      height: ${headerHeightResponsive}px;
      padding-top: 50px;
    }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 15px;
`;

export const LanguagePickerDiv = styled.div`
  text-align: right;

  margin: 0px;

  border-radius: 15px;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin-top: 0px;
  margin-bottom: 5px;
`;

export const StyledSubtitle = styled.h2`
  font-size: 20px;

  margin: 5px;
`;
