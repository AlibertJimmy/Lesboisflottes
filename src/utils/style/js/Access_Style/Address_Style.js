// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../../constants/Global_Constants';

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveWidthMobile}px){

    flex-direction: column;
  }

  border: 1px solid red;
`;

export const AddressContainer = styled.div`
    text-align: center;
    padding: 20px;

    border: 1px solid blue;
`;

export const MapContainer = styled.div`
  text-align: center;
  padding: 20px;

  position: relative;

  flex-grow: 1;

  height: 400px;

  @media (max-width: ${responsiveWidthTablet}px){
    height: 300px;
  }

  @media (max-width: ${responsiveWidthMobile}px) {
    height: 200px;
  }

  border: 1px solid black;
  `;
