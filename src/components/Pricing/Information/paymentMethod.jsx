// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Styles
import { PricingInformationContainer } from '../../../utils/style/js/Pricing_Style/PricingInformation_Style';
import { PageSubtitle, StyledP } from '../../../utils/style/js/Font_Style';

function PaymentMethod () {
  const { t } = useTranslation();

  return (
      <PricingInformationContainer id='paymentMethodContainer'>
        <PageSubtitle>{t('PaymentMethodTitle')}</PageSubtitle>
          <ul>
              <li><StyledP>{t('PaymentMethodText3')}</StyledP></li>
              <li><StyledP>{t('PaymentMethodText4')}</StyledP></li>
          </ul>
      </PricingInformationContainer>
  );
}

export default PaymentMethod;
