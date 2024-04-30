// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../../constants/Global_Constants';
// import colors from '../../../colors/colors';
import { CommonText } from '../Font_Style';

export const AccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  gap: 20px;
`;

export const AccessIntroP = styled.p`
    ${CommonText};
    margin: 5px;

    text-align: center;
    font-style: italic;

`;

export const AccessTransportWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${responsiveWidthTablet}px){
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const AccessTransportContainer = styled.div`
  display: flex;
  flex: 1 0 150px;
  margin: 20px;
  flex-direction: column;

  @media (max-width: ${responsiveWidthTablet}px){
    
  }

`;

export const AccessTransportTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const AccesTransportListContainer = styled.div`
  display: flex;

  justify-content: center;
`;

export const AccessParkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: ${responsiveWidthMobile}px){
    width: 200px;
  }
`;

export const AccessParkingTextContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
