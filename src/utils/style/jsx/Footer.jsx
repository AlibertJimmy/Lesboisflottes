// Import Style
import styled from 'styled-components';

// Import Colors
import colors from './colors';
import { commonHeaderFooter } from './style';

export const StyledFooter = styled.div`
    ${commonHeaderFooter};
    
    flex-direction: row;
    align-items:center;

    justify-content: space-between;

    height:55px;


    color: ${colors.link};

    button#goToTopButton {
        background-color: ${colors.backgroundHeaderFooter};
        border: none;
        padding: 10px 20px;
        cursor: pointer;
      }
`;

export const StyledText = styled.div`
      display:flex;
      flex-direction: column;
      text-align:center;
`;

export const StyledP = styled.p`
    font-size: 15px;
    margin: 5px;
`;
