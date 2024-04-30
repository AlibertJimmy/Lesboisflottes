// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PricingInformationContainer } from '../../../utils/style/js/Pricing_Style/PricingInformation_Style';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function HostingHours () {
  const { t } = useTranslation();

  return (
      <PricingInformationContainer id='hostingHoursContainer'>
        <PageSubtitle>{t('HostingHoursTitle')}</PageSubtitle>
        <StyledP>{t('HostingHoursText')}</StyledP>
      </PricingInformationContainer>
  );
}

export default HostingHours;
