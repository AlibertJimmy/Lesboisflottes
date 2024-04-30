// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PricingInformationContainer } from '../../../utils/style/js/Pricing_Style/PricingInformation_Style';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function PricingInclude () {
  const { t } = useTranslation();

  return (
      <PricingInformationContainer id='pricingIncludeContainer'>
        <PageSubtitle>{t('PricingIncludeTitle')}</PageSubtitle>
          <ul>
              <li><StyledP>{t('PricingIncludeText1')}</StyledP></li>
              <li><StyledP>{t('PricingIncludeText2')}</StyledP></li>
              <li><StyledP>{t('PricingIncludeText3')}</StyledP></li>
          </ul>
      </PricingInformationContainer>
  );
}

export default PricingInclude;
