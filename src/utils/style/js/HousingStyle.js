// Import Style
import styled from 'styled-components';

// Import Constant
import { responsiveWidthTablet } from '../../constants/Global_Constants';

export const EquipmentListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Avantgarde;

    text-align: left;
    padding: 0 20px;

    @media (max-width: ${responsiveWidthTablet}px) {
      flex-direction: column;
    }
`;
