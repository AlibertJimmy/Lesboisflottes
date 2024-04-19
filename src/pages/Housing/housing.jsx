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

// Import Style
import {
  HousingPageWarper,
  HousingPageContainer
} from '../../utils/style/js/Housing_Style/HousingPage_Style';
import { PageWrapper } from '../../utils/style/js/GlobalStyle';

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
