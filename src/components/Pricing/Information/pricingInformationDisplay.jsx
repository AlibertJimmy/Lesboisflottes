// Import React Libraries
import React from 'react';

// Import Components
import CancelCondition from './cancelCondition';
import HostingHours from './hostingHours';
import PaymentMethod from './paymentMethod';

// Import Style
import { PricingInformationDisplayContainer, PricingInformationDisplayWrapper } from '../../../utils/style/js/Pricing_Style/PricingInformation_Style';

function PricingInformationDisplay () {
  return (
    <PricingInformationDisplayWrapper id='pricingInformationDisplayWrapper'>
      <HostingHours/>
      <PricingInformationDisplayContainer>
        <CancelCondition/>
        <PaymentMethod/>
      </PricingInformationDisplayContainer>
    </PricingInformationDisplayWrapper>
  );
}

export default PricingInformationDisplay;
