// Import React Libraries
import React from 'react';

// Import Component
// import GallerySample from '../../components/Gallery/myGallery';
import GallerySampleGrid from '../../components/Gallery/GallerySampleGrid';
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

// Import Datas
// import { photosSample } from '../../datas/photos';

// Import Style
import styled from 'styled-components';
import { PageWrapper, commonTitleStyle } from '../../utils/style/js/style';

import { responsiveWidthTablet, verticalMargin } from '../../utils/constants';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column;
    gap: ${verticalMargin}px;
  }
`;

const StyledWelcome = styled.h1`
    ${commonTitleStyle};
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
`;

const CommentScrollingBannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 45%;

  @media (max-width: ${responsiveWidthTablet}px) {
    width: 100%;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  transition: none;

  @media (max-width: ${responsiveWidthTablet}px) {
    width: 100%;
  }

`;

function Home () {
  return (
    <PageWrapper id='homePageWrapper'>
      <StyledWelcome>Welcome</StyledWelcome>
      <HomeWrapper id='homeWrapper'>
        <CommentScrollingBannerWrapper id='commentScrollingBannerWrapper'>
          <CommentScrollingBanner/>
        </CommentScrollingBannerWrapper>
        <GalleryContainer id='galleryContainer'>
          <GallerySampleGrid/>
        </GalleryContainer>
      </HomeWrapper>
    </PageWrapper>
  );
}

export default Home;
