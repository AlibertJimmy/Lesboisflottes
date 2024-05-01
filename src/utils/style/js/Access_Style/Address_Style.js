// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../../constants/Global_Constants';
import colors from '../../../colors/colors';

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveWidthMobile}px){

    flex-direction: column;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  padding: 20px;
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
  `;

export const AdressButton = styled.button`
  height: 40px;
  width: 75px;

  font-family: cursive;

  cursor: pointer;

  border-radius: 10px;
  border: none;

  color: ${colors.navLinks};
  background: ${colors.backgroundHeaderFooter};
  box-shadow: 0 0 10px ${colors.interactifElement};

  &:hover {
    color: ${colors.backgroundHeaderFooter};
    background: ${colors.navLinks};
    box-shadow: 0 0 10px ${colors.interactifElementHover};
  }
`;
