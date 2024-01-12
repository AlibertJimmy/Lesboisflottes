// Import React Libraries
import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Styles
import {
  StyledFooter,
  FooterSideContainerRight, FooterSideContainerLeft,
  FooterTextContainer, StyledP
} from '../../utils/style/js/FooterStyle';
import { StyledIcon } from '../../utils/style/js/IconStyle';

function Footer () {
  const { t } = useTranslation();
  const currentYear = format(new Date(), 'yyyy');
  return (
    <StyledFooter>
        <FooterSideContainerLeft></FooterSideContainerLeft>
        <FooterTextContainer id='footerTextContainer'>
            <StyledP>Copyright © {currentYear} {t('AllRightsReserved')}</StyledP>
        </FooterTextContainer>
        <FooterSideContainerRight onClick={() => scrollToTop()}>
            <StyledIcon id="scrollToTopChevron" icon={faChevronUp} />
        </FooterSideContainerRight>
    </StyledFooter>
  );
}

export default Footer;
