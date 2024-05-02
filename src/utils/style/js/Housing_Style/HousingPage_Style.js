// Import Styled
import styled from 'styled-components';
import { responsiveWidthTablet } from '../../../constants/Global_Constants';

export const HousingPageWarper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HousingLateralWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column;
  }
`;

export const HousingLateralWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column-reverse;
  }
`;

export const HousingPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  @media (max-width: ${responsiveWidthTablet}px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const HousingPresentationContainer = styled.div`
    text-align: left;
    padding: 20px;
`;
