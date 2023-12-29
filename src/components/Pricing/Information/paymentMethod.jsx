// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Styles
import { PageSubtitle, StyledP } from '../../../utils/style/js/style';
import { InformationContainer } from '../../../utils/style/js/PricingStyle';

function PaymentMethod () {
  const { t } = useTranslation();

  return (
      <InformationContainer id='paymentMethodContainer'>
        <PageSubtitle>{t('PaymentMethodTitle')}</PageSubtitle>
          <ul>
              <li><StyledP>{t('PaymentMethodText3')}</StyledP></li>
              <li><StyledP>{t('PaymentMethodText4')}</StyledP></li>
          </ul>
      </InformationContainer>
  );
}

export default PaymentMethod;
