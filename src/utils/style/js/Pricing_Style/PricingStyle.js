// Import Style
import styled from 'styled-components';

import {
  responsiveWidthMobile,
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
