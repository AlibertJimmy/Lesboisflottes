// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Components
import HousingPresentation from '../../components/Housing/HousingPresentation';
import HousingEquipmentList from '../../components/Housing/HousingEquipment';
import HousingGallery from '../../components/Housing/Housing_Gallery';

// Import Data
import { housingPageContent } from '../../datas/pageContent/housingPageContent';

// Import TopIllustration
import housingTopIllustration from '../../assets/topIllustrations/HousingTopIllustration.jpg';

// Import Style
import {
  HousingPageWarper,
  HousingPageContainer
} from '../../utils/style/js/Housing_Style/HousingPage_Style';
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import TopIllustration from '../../components/TopIllustration/TopIllustration';

function Housing () {
  const { t } = useTranslation();

  return (
    <>
    <Helmet>
        <title>{t(`${housingPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${housingPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
      <TopIllustration image={housingTopIllustration} title={'Housing'}/>
      <PageWrapper>
        <HousingPageWarper id='housingPageWrapper'>
          <HousingPageContainer>
            <HousingPresentation/>
            <HousingEquipmentList/>
          </HousingPageContainer>
          <HousingGallery/>
        </HousingPageWarper>
      </PageWrapper>
    </>
  );
}

export default Housing;
