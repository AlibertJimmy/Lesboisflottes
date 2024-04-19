// Import Style
import styled from 'styled-components';

import { commonTitleStyle } from './Font_Style';

// Import Constants
import { responsiveWidthTablet, verticalMargin } from '../../constants/Global_Constants';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column;
    gap: ${verticalMargin}px;
  }
`;

export const StyledWelcome = styled.h1`
    ${commonTitleStyle};
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
`;

export const CommentScrollingBannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 45%;

  @media (max-width: ${responsiveWidthTablet}px) {
    width: 100%;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;

  @media (max-width: ${responsiveWidthTablet}px) {
    width: 100%;
  }
`;
