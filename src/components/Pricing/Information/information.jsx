import CancelCondition from './cancelCondition'
import HostingHours from './hostingHours'
import PaymentMethod from './paymentMethod'
import PricingInclude from './pricingInclude'

import styled from 'styled-components'
import { borderWidth, screenWidthMobile, screenWidthTablet } from '../../../utils/style/jsx/constantes'

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content:space-evenly;
    

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${screenWidthTablet}px){
      flex-direction:column;
      
    }

    @media (max-width: ${screenWidthMobile}px){
      flex-direction:column;
      margin:0;
    }
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  

`



function InformationDisplay() {

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
  )
}

export default InformationDisplay
