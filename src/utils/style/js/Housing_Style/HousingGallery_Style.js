// Import Styled
import styled, { css } from 'styled-components';

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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'one two' 'three three' 'four five' 'six seven';
`;

export const FeaturedGrid = css`
  position: relative;  

  overflow: hidden;
  
  cursor: pointer;
`;

export const GridOne = styled.div`
  ${FeaturedGrid}
  grid-area: one;
`;

export const GridTwo = styled.div`
  ${FeaturedGrid}
  grid-area: two;
`;

export const GridThree = styled.div`
  ${FeaturedGrid}
  grid-area: three;
`;

export const GridFour = styled.div`
  ${FeaturedGrid}
  grid-area: four;
`;

export const GridFive = styled.div`
  ${FeaturedGrid}
  grid-area: five;
`;

export const GridSix = styled.div`
  ${FeaturedGrid}
  grid-area: six;
`;

export const GridSeven = styled.div`
  ${FeaturedGrid}
  grid-area: seven;
`;

export const GridHeight = styled.div`
  ${FeaturedGrid}
  grid-area: seven;
`;

export const GalleryImg = styled.img`
  height: 100%;
  width: 100%;
`;
