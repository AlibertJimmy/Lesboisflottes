// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Styles
import {
  StyledFooter,
  FooterSideContainer, FooterIcon,
  FooterTextContainer, StyledP
} from '../../utils/style/js/FooterStyle';

function Footer () {
  return (
    <StyledFooter>
        <FooterSideContainer></FooterSideContainer>
        <FooterTextContainer id='footerTextContainer'>
            <StyledP>Copyright © 2023 Les Bois Flottés</StyledP>
        </FooterTextContainer>
        <FooterSideContainer onClick={() => scrollToTop()}>
            <FooterIcon id="scrollToTopChevron" icon={faChevronUp} />
        </FooterSideContainer>
    </StyledFooter>
  );
}

export default Footer;
