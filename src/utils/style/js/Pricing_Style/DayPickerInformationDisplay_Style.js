// Import Style
import styled from 'styled-components';

// Import Constants
import { dayPickerLegendInformationWrapperHeight } from '../../../constants/Prices_Contants';

export const DayPickerInformationDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;

  height: ${dayPickerLegendInformationWrapperHeight}px;
  width: 200px;

  padding: 0 20px;

  border: 1px solid blue;
`;

export const DayPickerInformationDisplayP = styled.p`
  margin: 5px 0;
`;
