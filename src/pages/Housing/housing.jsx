// Import React Libraries
import React from 'react';

// Import Components
import HousingPresentation from '../../components/Housing/Housing';
import EquipmentList from '../../components/Housing/Equipment';

// Import Style
import { PageWrapper } from '../../utils/style/js/style';

function Housing () {
  return (
      <PageWrapper id='housingPageWrapper'>
        <HousingPresentation/>
        <EquipmentList/>
      </PageWrapper>

  );
}

export default Housing;
