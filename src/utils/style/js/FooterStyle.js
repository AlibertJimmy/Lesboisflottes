// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../colors';

// Import Constants
import { footerHeight } from '../../constants';

export const StyledFooter = styled.div`
display: flex;
width: 100%;

background: ${colors.backgroundHeaderFooter};
    
    flex-direction: row;
    align-items:center;

    justify-content: space-between;

    height: ${footerHeight}px;


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
