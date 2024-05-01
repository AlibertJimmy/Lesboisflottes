// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { dayPickerLegendInformationWrapperHeight } from '../../../constants/Prices_Contants';
import { responsiveWidthMobile } from '../../../constants/Global_Constants';

// Legend Related
export const PricingLegendWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${dayPickerLegendInformationWrapperHeight}px;

  @media (max-width: ${responsiveWidthMobile}px){
    height: 120px;
  }
`;

export const PricingLegendTable = styled.table`
  padding: 10px;
  border-spacing: 5px 10px;

  @media (max-width: ${responsiveWidthMobile}px){
      padding:0;
      border-spacing: 5px 5px;
  }
`;

const LegendTCCellCommonStyle = css`
  padding: 5px;
  border-radius: 5px;
  text-align:left;
  height: 32px;
`;

export const LegendTDCellColor = styled.td`
  display: flex;
  align-items: center;    
  ${LegendTCCellCommonStyle};
  width: 50px;
`;

export const LegendColorDiv = styled.div`
  width: 100%;
  height: 25px;
  border-radius: 5px;
`;

export const LegendTDCellText = styled.td`
    ${LegendTCCellCommonStyle};
`;
