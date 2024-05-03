// Import Style
import styled, { css } from 'styled-components';
import { responsiveWidthMobile } from '../../../constants/Global_Constants';

// Import Constants

export const LandingPageBeachGalleryGridWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

const CommonGridContainer = css`
  display: grid;
  height: 24vw;
  gap: 0.5rem;

  @media (max-width: ${responsiveWidthMobile}px){
    height: 60vw;
  }
`;

export const LandingPageBeachGalleryGridContainer = styled.div`
  ${CommonGridContainer};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'one two';

  @media (max-width: ${responsiveWidthMobile}px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'one''two';
  }
  
`;
