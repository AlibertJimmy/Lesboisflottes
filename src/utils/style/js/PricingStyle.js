// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { PageSubtitle } from './style';
import { responsiveWidthMobile, verticalMargin } from '../../constants';

// Legend Related
export const SeasonLegendWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`;

export const PageSubtitleResponsive = styled(PageSubtitle)`
    @media (max-width: ${responsiveWidthMobile}px){
        display:none;
    }  
`;

export const LegendTable = styled.table`
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
    border: 1px solid red;
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
  border: 1px solid green;
`;
