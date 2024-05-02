// Import Styled
import styled from 'styled-components';
import { responsiveWidthTablet } from '../../../constants/Global_Constants';

export const HousingPatioGridWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  width: 100%;
`;

export const HousingPatioGridContainer = styled.div`
  display: grid;

  width: 100%;

  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:'one two'
                      'three three' 
                      'three three';

  @media (max-width: ${responsiveWidthTablet}px){

  }
`;
