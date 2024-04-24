// Import Styled
import styled, { css } from 'styled-components';

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
  grid-area: height;
`;

export const GridNine = styled.div`
  ${FeaturedGrid}
  grid-area: nine;
`;

export const GridTen = styled.div`
  ${FeaturedGrid}
  grid-area: ten;
`;

export const GalleryImg = styled.img`
  height: 100%;
  width: 100%;
`;
