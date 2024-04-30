// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { selectionInformationWrapper } from '../../../constants/Prices_Contants';
import { responsiveWidthMobile } from '../../../constants/Global_Constants';

// Legend Related
export const PricingLegendWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;

  height: ${selectionInformationWrapper}px;

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
`;

export const LegendTDCellColor = styled.td`
    ${LegendTCCellCommonStyle};
    width: 40px;
`;

export const LegendTDCellText = styled.td`
    ${LegendTCCellCommonStyle};
`;
