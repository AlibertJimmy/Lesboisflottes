// Import Style
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Impor Colors
import colors from '../../colors/colors';
import {
  headerHeight, footerHeight,
  horizontalMargin, verticalMargin,
  responsiveWidthTablet, responsiveWidthMobile,
  horizontalMarginTablet, horizontalMarginMobile, generalTextFontSize
} from '../../constants/Global_Constants';

export const PageWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: ${verticalMargin}px;


  margin: ${headerHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
  min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;

  @media (max-width: ${responsiveWidthTablet}px){
    margin: ${headerHeight + verticalMargin}px ${horizontalMarginTablet}px ${verticalMargin}px ${horizontalMarginTablet}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    margin: ${headerHeight + verticalMargin}px ${horizontalMarginMobile}px ${verticalMargin}px ${horizontalMarginMobile}px;
  }
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

// Page Component Style

// Title Style

export const commonTitleStyle = css`
  font-family: sans-serif;
  color: ${colors.title};
`;

export const PageTitle = styled.h1`
  ${commonTitleStyle};
  font-size: 30px;

  color: ${colors.title} ;

  text-align: center;
`;

// Enlever margin ?
export const PageSubtitle = styled.h2`
  ${commonTitleStyle};    
  font-size: 25px;
  margin: 5px 0;

  color: ${colors.title} ;

  @media (max-width: ${responsiveWidthMobile}px){
      text-align:center;
  }  
`;

export const PageSectionTitle = styled.h2`
  ${commonTitleStyle};
  font-size: 30px;

  color: ${colors.title} ;

  text-align: center;
`;

export const StyledTitleH2 = styled.h2`
  font-family: sans-serif;
  font-size: 25px;
  margin: 0;
`;

export const PageSubtitleResponsive = styled.h2`
  ${commonTitleStyle};    
  font-size: 25px;
  margin: 5px 0;

  color: ${colors.title} ;

  @media (max-width: ${responsiveWidthMobile}px){
    text-align:center;
    font-size: 20px;
  }


  @media (max-width: 380px){
      font-size: 18px;
  }  
`;

export const SectionText = styled.p`
    font-family: sans-serif;
    font-size: ${generalTextFontSize}px;
    margin: 0px;
    padding: 0px;
`;

// Header & Footer
export const commonHeaderFooter = css`
    display: flex;
    width: 100%;

    background: ${colors.marineBlue};
`;

// Common Writing
export const commonWriting = css`
  font-family:  sans-serif;
  font-weight:bold;

  @media (max-width: ${responsiveWidthTablet}px){
    color: ${colors.linkResponsive};
  }
`;

// Item Selector
export const StyledTitleH1 = styled.h1`
  font-family: sans-serif;
  color: ${colors.orangeCustom};
  margin: 0;

  @media (max-width: ${responsiveWidthTablet}px){
    text-align: center;
  }
`;

export const CommonLinksIcon = css`
  width: 25px;
  height: 25px;
  color: white;

  &:hover{
      color: ${colors.orangeCustom};
  }

`;

export const StyledIcon = styled(FontAwesomeIcon)`
  ${CommonLinksIcon};
`;
