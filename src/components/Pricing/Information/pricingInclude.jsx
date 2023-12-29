// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PageSubtitle, StyledP } from '../../../utils/style/js/style';
import { InformationContainer } from '../../../utils/style/js/PricingStyle';

function PricingInclude () {
  const { t } = useTranslation();

  return (
      <InformationContainer id='pricingIncludeContainer'>
        <PageSubtitle>{t('PricingIncludeTitle')}</PageSubtitle>
          <ul>
              <li><StyledP>{t('PricingIncludeText1')}</StyledP></li>
              <li><StyledP>{t('PricingIncludeText2')}</StyledP></li>
              <li><StyledP>{t('PricingIncludeText3')}</StyledP></li>
          </ul>
      </InformationContainer>
  );
}

export default PricingInclude;
