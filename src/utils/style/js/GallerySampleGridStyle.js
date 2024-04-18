// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../constants/Global_Constants';

export const GridWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

const CommonGridContainer = css`
  display: grid;

  height: 400px;

  gap: 0.5rem;

`;

export const GridContainerResponsive = styled.div`
  ${CommonGridContainer};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'one one two three' 'one one six six' 'four five six six' 'four seven seven seven';
  
`;

export const GridContainerLeft = styled.div`
  ${CommonGridContainer};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'one one' 'one one' 'four five' 'four five';
`;

export const GridContainerRight = styled.div`
  ${CommonGridContainer};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'two three' 'six six' 'six six' 'seven seven';
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

export const lilOverlay = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: all 0.3s ease-in;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const OverLay = styled.div`
  ${lilOverlay};
`;

export const Description = styled.p`
  position: absolute;
  bottom: -2rem;
  left: 1rem;

  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 600;

  color: white;

  @media (max-width:${responsiveWidthTablet}px) {
        bottom: 0rem;
        left: 1rem;
        font-size: 1rem;
  }

  @media (max-width:${responsiveWidthMobile}px) {
          left: 0.5rem;
  }
`;

export const CategoryImg = styled.img`
  height: 100%;
  width:100%;
`;
