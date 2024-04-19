// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Components
import HousingPresentation from '../../components/Housing/Housing';
import EquipmentList from '../../components/Housing/Equipment';

// Import Data
import { housingPageContent } from '../../datas/pageContent/housingPageContent';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';
import HousingGallery from '../../components/Housing/Housing_Gallery';

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
      <PageWrapper id='housingPageWrapper'>
        <PageTitle>{t('Housing')}</PageTitle>
        <HousingPresentation/>
        <EquipmentList/>
        <HousingGallery/>
      </PageWrapper>
    </>
  );
}

export default Housing;
