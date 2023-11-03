import CancelCondition from './cancelCondition'
import HostingHours from './hostingHours'
import PaymentMethod from './paymentMethod'
import PricingInclude from './pricingInclude'

import styled from 'styled-components'
import { borderWidth } from '../../../utils/style/jsx/constantes'

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    text-align: left;

    margin: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
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
