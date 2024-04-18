// Import Style
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { footerHeight, responsiveWidthMobile } from '../../constants/Global_Constants';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;

    align-items:center;
    justify-content: space-between;

    width: 100%;
    height: ${footerHeight}px;

    color: ${colors.navLinks};
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

// Icon
export const StyledIcon = styled(FontAwesomeIcon)`
    height: 25px;
    width: 25px;
  cursor: pointer;
  &:hover{
    color: ${colors.linkHover};
  }
`;
