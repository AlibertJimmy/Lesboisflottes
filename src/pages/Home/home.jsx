// Import React Libraries
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Component
import GallerySampleGridResponsive from '../../components/Gallery/GallerySampleGridResponsive';
import GallerySampleGridLeft from '../../components/Gallery/GallerySampleGridLeft';
import GallerySampleGridRight from '../../components/Gallery/GallerySampleGridRight';
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

// Import Datas
import { homePageContent } from '../../datas/pageContent/homePageContent';

// Import Image
import homeIllustration from '../../assets/topIllustrations/HomeTopIllustration.jpg';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import {
  HomeWrapper,
  CommentScrollingBannerWrapper,
  GalleryContainer
} from '../../utils/style/js/HomePageStyle';

// Import Constants
import { responsiveWidthTablet } from '../../utils/constants/Global_Constants';
import TopIllustration from '../../components/TopIllustration/TopIllustration';

function Home () {
  const { t } = useTranslation();

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
    <>
      <Helmet>
        <title>{t(`${homePageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${homePageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
    <TopIllustration image={homeIllustration} title={'Welcome'}/>
    <PageWrapper id='homePageWrapper'>
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
    </>
  );
}

export default Home;
