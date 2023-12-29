// Import Style
import styled from 'styled-components';

// Import Constants
import { responsiveWidthMobile, verticalMargin } from '../../constants';

export const InformationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content:space-evenly;
    gap: ${verticalMargin}px;
    
    border-radius: 15px;

    @media (max-width: ${responsiveWidthMobile}px){
      flex-direction:column;
      
    }
    border: 1px solid red;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(45% - 10px);
  border-radius: 15px;
  height: 150px;

  @media (max-width: ${responsiveWidthMobile}px){
    width:100%;
  }
  border: 1px solid green;
`;
