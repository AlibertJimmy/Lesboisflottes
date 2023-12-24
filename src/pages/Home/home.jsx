// Import React Libraries
import React from 'react';

// Import Component
import GallerySample from '../../components/Gallery/myGallery';
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

// Import Datas
import { photosSample } from '../../datas/photos';

// Import Style
import styled from 'styled-components';
import { PageWrapper, StyledWelcome } from '../../utils/style/js/style';

import { responsiveWidthMobile } from '../../utils/constants';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${responsiveWidthMobile}px) {
    flex-direction: column;
  }
`;
const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 550px;

  margin: 0 20px;

  border-radius: 15px;

  @media (max-width: ${responsiveWidthMobile}px) {
    margin:0;
  }

`;

const WelcomeAndComments = styled.div`
  justify-content: center;
  flex: 1;
`;

function Home () {
  return (
    <PageWrapper>
      <HomeWrapper>

          <WelcomeAndComments>
            <StyledWelcome>WELCOME</StyledWelcome>
            <CommentScrollingBanner/>
          </WelcomeAndComments>

        <GalleryContainer>
          <GallerySample photos={photosSample}/>
        </GalleryContainer>
      </HomeWrapper>
    </PageWrapper>
  );
}

export default Home;
