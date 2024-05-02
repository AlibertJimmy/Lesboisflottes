// Import Styled
import styled from 'styled-components';
import { responsiveWidthMobile, responsiveWidthTablet } from '../../../constants/Global_Constants';
// import { HousingGridContainerHeight, HousingGridContainerHeightTablet } from '../../../constants/HousingGallery_Constants';

export const HousingGridWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  width: 100%;
`;
// height: ${HousingGridContainerHeight}px;
// height: ${HousingGridContainerHeightTablet}px;
export const HousingGridContainer = styled.div`
  display: grid;

  
  width: 100%;

  gap: 0.5rem;
  grid-template-columns: 1fr 0.5fr 1fr 1fr 0.75fr;
  grid-template-rows: 1fr 1fr 0.5fr 1fr;
  grid-template-areas:'one one one one two'
                      'one one one one two' 
                      'three three four five six' 
                      'three three four five six';

  @media (max-width: ${responsiveWidthTablet}px){
    
    
  }

  @media (max-width: ${responsiveWidthMobile}px){
    
  }
`;
