import styled from 'styled-components'

import CancelCondition from './cancelCondition'
import HostingHours from './hostingHours'
import PaymentMethod from './paymentMethod'
import PricingInclude from './pricingInclude'


const InformationWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    text-align: left;

    margin: 10px;

    border-radius: 15px;
    border: 1px solid black;
`



function InformationDisplay() {

  return (
      <InformationWrapper>
        <CancelCondition/>
        <HostingHours/>
        <PaymentMethod/>
        <PricingInclude/>
      </InformationWrapper>
  )
}

export default InformationDisplay
