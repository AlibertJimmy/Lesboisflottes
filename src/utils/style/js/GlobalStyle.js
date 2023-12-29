// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../colors';

// Import Constants
import {
  verticalMargin, horizontalMargin, horizontalMarginResponsive,
  responsiveWidthMobile, responsiveWidthTablet,
  headerHeight, headerHeightResponsive, navBarHeight, footerHeight
} from '../../constants';

export const PageWrapper = styled.div`
    margin: ${headerHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;

    @media (max-width: ${responsiveWidthTablet}px){
        margin: ${navBarHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
        min-height: ${window.innerHeight - (headerHeightResponsive + verticalMargin * 2 + footerHeight)}px;
    }

    @media (max-width: ${responsiveWidthMobile}px){
        margin: ${headerHeightResponsive + verticalMargin}px ${horizontalMarginResponsive}px ${verticalMargin}px ${horizontalMarginResponsive}px;
    }
`;

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
`;

export const commonTitleStyle = css`
  font-family: cursive;
  font-style: italic;
  color: ${colors.title};
`;

export const PageTitle = styled.h1`

    ${commonTitleStyle};
    font-size: 30px;

    color: ${colors.title} ;

    text-align: center;
`;

export const PageSubtitle = styled.h2`
    ${commonTitleStyle};    
    font-size: 25px;
    margin: 5px 0;

    color: ${colors.title} ;

    @media (max-width: ${responsiveWidthMobile}px){
        text-align:center;
    }  
`;

export const StyledP = styled.p`
    font-size: 15px;
    font-family: cursive;
    margin: 5px;

    @media (max-width: ${responsiveWidthMobile}px){
        padding-left:10px;
    }
`;
