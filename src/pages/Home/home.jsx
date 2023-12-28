// Import React Libraries
import React, { useEffect, useState } from 'react';

// Import Component
import GallerySampleGridResponsive from '../../components/Gallery/GallerySampleGridResponsive';
import GallerySampleGridLeft from '../../components/Gallery/GallerySampleGridLeft';
import GallerySampleGridRight from '../../components/Gallery/GallerySampleGridRight';
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

// Import Style
import { PageWrapper } from '../../utils/style/js/style';
import {
  HomeWrapper,
  StyledWelcome,
  CommentScrollingBannerWrapper,
  GalleryContainer
} from '../../utils/style/js/HomePageStyle';

// Import Constants
import { responsiveWidthTablet } from '../../utils/constants';

function Home () {
  const [homeLayoutResponsive, setHomeLayoutResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized!');
      if (window.innerWidth <= responsiveWidthTablet) {
        setHomeLayoutResponsive(true);
      } else {
        setHomeLayoutResponsive(false);
      }
    };
    if (window.innerWidth <= responsiveWidthTablet) {
      setHomeLayoutResponsive(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <PageWrapper id='homePageWrapper'>
      <StyledWelcome>Welcome</StyledWelcome>
      <HomeWrapper id='homeWrapper'>
        {homeLayoutResponsive
          ? <>
            <CommentScrollingBannerWrapper id='commentScrollingBannerWrapper'>
              <CommentScrollingBanner/>
            </CommentScrollingBannerWrapper>
            <GalleryContainer id='galleryContainerResponsive'>
              <GallerySampleGridResponsive/>
            </GalleryContainer>
          </>
          : <>
            <GalleryContainer id='galleryContainerLeft'>
              <GallerySampleGridLeft/>
            </GalleryContainer>
            <CommentScrollingBannerWrapper id='commentScrollingBannerWrapper'>
              <CommentScrollingBanner/>
            </CommentScrollingBannerWrapper>
            <GalleryContainer id='galleryContainerRight'>
              <GallerySampleGridRight/>
            </GalleryContainer>
          </>
        }
      </HomeWrapper>
    </PageWrapper>
  );
}

export default Home;
