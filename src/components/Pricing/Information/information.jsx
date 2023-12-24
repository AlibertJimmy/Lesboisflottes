// Import React Libraries
import React from 'react';

// Import Components
import CancelCondition from './cancelCondition';
import HostingHours from './hostingHours';
import PaymentMethod from './paymentMethod';
import PricingInclude from './pricingInclude';

import styled from 'styled-components';
import { responsiveWidthMobile } from '../../../utils/constants';

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content:space-evenly;
    
    border-radius: 15px;

    @media (max-width: ${responsiveWidthMobile}px){
      flex-direction:column;
      
    }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  

`;

function InformationDisplay () {
  return (
      <InformationWrapper>
        <InformationContainer>
          <CancelCondition/>
          <HostingHours/>
        </InformationContainer>
        <InformationContainer>
          <PaymentMethod/>
          <PricingInclude/>
        </InformationContainer>
      </InformationWrapper>
  );
}

export default InformationDisplay;
