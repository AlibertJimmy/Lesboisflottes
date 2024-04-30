// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PricingInformationContainer } from '../../../utils/style/js/Pricing_Style/PricingInformation_Style';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function CancelCondition () {
  const { t } = useTranslation();

  return (
      <PricingInformationContainer id='cancelConditionContainer'>
        <PageSubtitle>{t('CancelConditionTitle')}</PageSubtitle>
        <StyledP>{t('CancelConditionText')}</StyledP>
      </PricingInformationContainer>
  );
}

export default CancelCondition;
