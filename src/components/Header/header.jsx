// Import React Libraries
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import { LanguageMenu } from '../LanguageMenu/languageMenu';
import Navbar from '../Nav/Navbar';

// Import Function
import { scrollToTop } from '../../utils/functions/General';

// Import Style
import {
  HeaderWrapper,
  TitleContainer, StyledTitle, StyledSubtitle
} from '../../utils/style/js/HeaderStyle';
import { HeaderLink } from '../../utils/style/js/LinkStyle';

// Import Constants
import {
  responsiveWidthMobile, responsiveWidthTablet,
  headerHeight, headerHeightResponsive
} from '../../utils/constants';

function Header () {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHeightCurrent, setHeaderHeight] = useState(headerHeight);
  const scrollThreshold = 100;

  function handleOnClick () {
    scrollToTop();
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let newHeaderHeightCurrent;
    if (window.innerWidth > responsiveWidthTablet) {
      // Display on a wide screen
      if (scrollPosition < scrollThreshold) {
        newHeaderHeightCurrent = headerHeight;
      } else {
        newHeaderHeightCurrent = headerHeightResponsive;
      }
    } else if ((responsiveWidthTablet > window.innerWidth) && (window.innerWidth > responsiveWidthMobile)) {
      // Display on a tablet
      newHeaderHeightCurrent = 55;
    } else if (window.innerWidth < responsiveWidthMobile) {
      // Display on a mobile
      newHeaderHeightCurrent = 50;
    }
    setHeaderHeight(newHeaderHeightCurrent);
  }, [scrollPosition]);

  const shouldRenderSubtitles = responsiveWidthTablet < window.innerWidth && scrollPosition < scrollThreshold;

  return (
      <HeaderWrapper id='headerWrapper' style={{ height: `${headerHeightCurrent}px` }}>
        <LanguageMenu/>
        <TitleContainer id='titleDiv'>
          <HeaderLink to="/" onClick={handleOnClick}>
            <StyledTitle>{t('mainTitle')}</StyledTitle>
            {shouldRenderSubtitles && (
            <>
              <StyledSubtitle>{t('subtitle1')}</StyledSubtitle>
              <StyledSubtitle>{t('subtitle2')}</StyledSubtitle>
            </>
            )}
          </HeaderLink>
        </TitleContainer>
        <Navbar/>
      </HeaderWrapper>
  );
}

export default Header;
