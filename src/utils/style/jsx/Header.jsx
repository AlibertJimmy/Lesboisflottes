// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';
import { ComponentBorder, commonLink, commonWriting } from './style';

// Import Colors
import colors from './colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet, headerHeight, borderWidth, headerHeightResponsive } from './constants';

export const StyledLinkHeader = styled(Link)`
    ${commonWriting};
    ${commonLink}
`;

export const StyledLinkSidebar = styled(Link)`
    ${commonWriting};
    ${commonLink};
    font-size: 20px;    

    margin-bottom: 10px;
`;

export const StyledWelcome = styled.h1`

    ${commonWriting};
    font-size: 40px;

    color: ${colors.title} ;

    text-align: center;
`;

// Header & Footer
export const commonHeaderFooter = css`
    ${ComponentBorder};
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
    z-index:9999;

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
  border: ${borderWidth}px solid black;  
`;

export const LanguagePickerDiv = styled.div`
  text-align: right;

  margin: 0px;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
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
