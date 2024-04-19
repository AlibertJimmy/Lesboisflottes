// Import Style
import styled from 'styled-components';

// Import Constant
import { responsiveWidthTablet } from '../../../constants/Global_Constants';

export const HousingEquipmentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: Avantgarde;

  text-align: left;
  padding: 0 20px;

  @media (max-width: ${responsiveWidthTablet}px) {
    flex-direction: column;
  }

  border: 1px solid red;
`;

export const HousingEquipmentListContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid blue;
`;
