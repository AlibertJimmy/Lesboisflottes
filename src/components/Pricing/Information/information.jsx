// Import React Libraries
import React from 'react';

// Import Components
import CancelCondition from './cancelCondition';
import HostingHours from './hostingHours';
import PaymentMethod from './paymentMethod';
import PricingInclude from './pricingInclude';

// Import Style
import { InformationWrapper } from '../../../utils/style/js/Pricing_Style/PricingStyle';

function InformationDisplay () {
  return (
      <InformationWrapper id='informationWrapper'>
          <CancelCondition/>
          <HostingHours/>
          <PaymentMethod/>
          <PricingInclude/>
      </InformationWrapper>
  );
}

export default InformationDisplay;
