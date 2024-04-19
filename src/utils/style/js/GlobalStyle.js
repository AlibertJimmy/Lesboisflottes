// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import {
  responsiveWidthMobile, responsiveWidthTablet,
  headerHeight, footerHeight,
  verticalMargin, horizontalMargin,
  horizontalMarginMobile
} from '../../constants/Global_Constants';

export const PageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: ${verticalMargin}px;

    margin: ${verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;

    @media (max-width: ${responsiveWidthTablet}px){
        margin: ${headerHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
        min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;
    }

    @media (max-width: ${responsiveWidthMobile}px){
        margin: ${headerHeight + verticalMargin}px ${horizontalMarginMobile}px ${verticalMargin}px ${horizontalMarginMobile}px;
    }

    border: 1px solid red;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: ${horizontalMargin}px;

  box-sizing: border-box;
`;

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
`;

// Common Writing
export const commonWriting = css`
  font-family: sans-serif;
  font-weight: bold;

  @media (max-width: ${responsiveWidthTablet}px){
    color: ${colors.linkResponsive};
  }
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

export const CommonText = css`
    font-size: 16px;
    font-family: cursive;
    color: ${colors.text};
`;

export const StyledP = styled.p`
    ${CommonText};
    margin: 5px;

    @media (max-width: ${responsiveWidthMobile}px){
        padding-left:10px;
    }
`;
