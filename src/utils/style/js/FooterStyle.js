// Import Style
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Colors
import colors from '../colors';

// Import Constants
import { footerHeight } from '../../constants';

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

export const FooterSideContainer = styled.div`
    display: flex;
    align-items: center;
    height: ${footerHeight}px;
    width: 25px;

    margin: 0 20px;
`;

export const FooterIcon = styled(FontAwesomeIcon)`
    height: 25px;
    width: 25px;
    cursor: pointer;
`;

export const FooterTextContainer = styled.div`
`;

export const StyledP = styled.p`
    font-family: cursive;
    font-size: 15px;
`;
