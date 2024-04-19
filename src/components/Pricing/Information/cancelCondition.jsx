// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { InformationContainer } from '../../../utils/style/js/PricingStyle';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function CancelCondition () {
  const { t } = useTranslation();

  return (
      <InformationContainer id='cancelConditionContainer'>
        <PageSubtitle>{t('CancelConditionTitle')}</PageSubtitle>
        <StyledP>{t('CancelConditionText')}</StyledP>
      </InformationContainer>
  );
}

export default CancelCondition;
