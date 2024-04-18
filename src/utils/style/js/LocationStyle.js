// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile } from '../../constants/Global_Constants';

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${responsiveWidthMobile}px){

    flex-direction: column;
  }
`;

export const MapContainer = styled.div`
  text-align: center;
  padding: 20px;

  position: relative;

  border-radius: 15px;

  flex-grow: 1;
  `;
