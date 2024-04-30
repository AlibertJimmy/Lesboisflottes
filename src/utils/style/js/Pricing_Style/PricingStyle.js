// Import Style
import styled from 'styled-components';

// Import Constants
import { selectionInformationWrapper } from '../../../constants/Prices_Contants';

import {
  responsiveWidthMobile,
  verticalMargin,
  marginBetweenPageComponent
} from '../../../constants/Global_Constants';

// Pricing Page Related
export const SelectionInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;

  margin: ${marginBetweenPageComponent}px 0;


  @media (max-width: ${responsiveWidthMobile}px){
    flex-direction:column-reverse;
    padding: 0;
  }
`;

export const DataDisplayWrapper = styled.div`
  text-align: center;
  height: ${selectionInformationWrapper}px;
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
`;

export const InnerDiv = styled.div`
  margin: 10px;
`;

export const DayPickerContainer = styled.div`
  display: flex;
  justify-content:center;
  margin: ${marginBetweenPageComponent}px 0;
`;

// Information Related
export const InformationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content:space-evenly;
    gap: ${verticalMargin}px;
    
    border-radius: 15px;

    @media (max-width: ${responsiveWidthMobile}px){
      flex-direction:column;
      
    }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(45% - 10px);
  border-radius: 15px;
  height: 150px;

  @media (max-width: ${responsiveWidthMobile}px){
    width:100%;
  }
`;
