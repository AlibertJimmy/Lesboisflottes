// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { footerHeight, responsiveWidthMobile } from '../../constants';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;

    align-items:center;
    justify-content: space-between;

    width: 100%;
    height: ${footerHeight}px;

    color: ${colors.link};
    background: ${colors.backgroundHeaderFooter};
`;

export const FooterSideContainerLeft = styled.div`
    display: flex;
    align-items: center;
    height: ${footerHeight}px;
    width: 25px;

    margin: 0 20px;

    @media (max-width: ${responsiveWidthMobile}px){
        width: 0;
        margin: 0;
    }
`;

export const FooterSideContainerRight = styled.div`
    display: flex;
    align-items: center;
    height: ${footerHeight}px;
    width: 25px;

    margin: 0 20px;
`;

export const FooterTextContainer = styled.div`
`;

export const StyledP = styled.p`
    font-family: cursive;
    font-size: 15px;
`;
