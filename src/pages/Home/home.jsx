// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Component
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

// Import Datas
import { homePageContent } from '../../datas/pageContent/homePageContent';

// Import Image
import homeIllustration from '../../assets/topIllustrations/HomeTopIllustration.jpg';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';

// Import Constants
import TopIllustration from '../../components/TopIllustration/TopIllustration';
import LandingPagePresentationComponent from '../../components/LandingPage/LandingPagePresentation_Component';

function Home () {
  const { t } = useTranslation();

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
          <LandingPagePresentationComponent/>
          <CommentScrollingBanner/>
      </PageWrapper>
    </>
  );
}

export default Home;
