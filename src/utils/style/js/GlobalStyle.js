// Import Style
import styled from 'styled-components';

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
    gap: 0px;

    margin: ${verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
    min-height: ${window.innerHeight - (headerHeight + verticalMargin * 2 + footerHeight)}px;

    @media (max-width: ${responsiveWidthTablet}px){
        margin: ${headerHeight + verticalMargin}px ${horizontalMargin}px ${verticalMargin}px ${horizontalMargin}px;
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
