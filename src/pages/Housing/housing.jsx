// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import HousingPresentation from '../../components/Housing/Housing';
import EquipmentList from '../../components/Housing/Equipment';

// Import Style
import { PageTitle, PageWrapper } from '../../utils/style/js/style';

function Housing () {
  const { t } = useTranslation();

  return (
      <PageWrapper id='housingPageWrapper'>
        <PageTitle>{t('Housing')}</PageTitle>
        <HousingPresentation/>
        <EquipmentList/>
      </PageWrapper>

  );
}

export default Housing;
