// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from './colors';

// Import Constants
import { borderWidth, headerMargin, headerMarginResponsive, responsiveWidthMobile, responsiveWidthTablet } from './constants';
// import { borderWidth, responsiveWidthMobile } from './constants';

export const ComponentBorder = css`
    border: ${borderWidth}px solid black;
`;

export const PageWrapper = styled.div`
    margin: ${headerMargin}px 25px;
    margin-bottom: 75px;

    @media (max-width: ${responsiveWidthTablet}px){
        margin: ${headerMarginResponsive}px 25px;
    }
`;

export const commonWriting = css`
  font-family: "Bradley Hand", cursive;
  font-style: italic;
`;

export const commonLink = css`
    color: ${colors.link} ;
    text-decoration: none;

    &:hover {
        color: ${colors.linkHover};
    }
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

export const StyledH1 = styled.h1`

    ${commonWriting};
    font-size: 30px;

    color: ${colors.title} ;

    text-align: left;
    padding-left: 20px;
`;

export const StyledH2 = styled.h2`
    ${commonWriting};    
    font-size: 25px;

    color: ${colors.title} ;

    text-align:center;

    @media (max-width: ${responsiveWidthMobile}px){
        text-align:center;
    }  
`;

export const StyledH3 = styled.h3`
    ${commonWriting};
    font-size: 25px;

    color: ${colors.title} ;
`;

export const StyledP = styled.p`
    font-size: 15px;
    font-family: Candassa;
    margin: 5px;

    @media (max-width: ${responsiveWidthMobile}px){
        
        padding-left:10px;
      }
`;

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`;
// Header & Footer
export const commonHeaderFooter = css`
    ${ComponentBorder};
    display: flex;
    width: 100%;

    background: ${colors.backgroundHeaderFooter};
`;
