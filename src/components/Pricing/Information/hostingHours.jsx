// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { InformationContainer } from '../../../utils/style/js/PricingStyle';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function HostingHours () {
  const { t } = useTranslation();

  return (
      <InformationContainer id='hostingHoursContainer'>
        <PageSubtitle>{t('HostingHoursTitle')}</PageSubtitle>
        <StyledP>{t('HostingHoursText')}</StyledP>
      </InformationContainer>
  );
}

export default HostingHours;
