// Import Styled
import styled from 'styled-components';

export const HousingGridWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  width: 50%;
`;

export const HousingGridContainer = styled.div`
  display: grid;

  height: 500px;

  gap: 0.5rem;
  grid-template-columns: 1fr 0.5fr 1fr 1fr 0.75fr;
  grid-template-rows: 1fr 1fr 0.5fr 1fr;
  grid-template-areas:'one one one one two'
                      'one one one one two' 
                      'three three four five six' 
                      'three three four five six';
`;
