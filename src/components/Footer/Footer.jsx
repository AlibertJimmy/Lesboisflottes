// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Styles
import {
  StyledFooter,
  FooterSideContainerRight, FooterSideContainerLeft, FooterIcon,
  FooterTextContainer, StyledP
} from '../../utils/style/js/FooterStyle';

function Footer () {
  return (
    <StyledFooter>
        <FooterSideContainerLeft></FooterSideContainerLeft>
        <FooterTextContainer id='footerTextContainer'>
            <StyledP>Copyright © 2023 Les Bois Flottés</StyledP>
        </FooterTextContainer>
        <FooterSideContainerRight onClick={() => scrollToTop()}>
            <FooterIcon id="scrollToTopChevron" icon={faChevronUp} />
        </FooterSideContainerRight>
    </StyledFooter>
  );
}

export default Footer;
