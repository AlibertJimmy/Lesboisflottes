// Import Style
import styled from 'styled-components';

// Import Constant
import { responsiveWidthTablet } from '../../../constants/Global_Constants';

export const HousingEquipmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: Avantgarde;

  text-align: left;
  padding: 0 20px;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column;
  }
`;

export const HousingEquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HousingEquipmentListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HousingEquipmentListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
