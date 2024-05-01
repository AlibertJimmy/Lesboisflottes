// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile } from '../../../constants/Global_Constants';

// Pricing Information Display Related
export const PricingInformationDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 20px 0;
`;

export const PricingInformationDisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content:space-evenly;
  gap: 20px;
  
  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction:column; 
  }
`;

export const PricingInformationContainerWrapped = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex: 1 0 calc(45% - 10px);
  height: 120px;

  @media (max-width: ${responsiveWidthMobile}px){
    width:100%;
  }
`;

export const PricingInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 120px;

  @media (max-width: ${responsiveWidthMobile}px){
    width:100%;
  }
`;
