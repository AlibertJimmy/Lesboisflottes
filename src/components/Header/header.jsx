// Import React Libraries
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import { LanguageMenu } from '../LanguageMenu/languageMenu';
import Navbar from '../Nav/Navbar';

// Import Function
import { scrollToTop } from '../../utils/functions/functions';

// Import Style
import { HeaderWrapper, LanguagePickerDiv, StyledLinkHeader, StyledSubtitle, StyledTitle, TitleDiv } from '../../utils/style/jsx/Header';
import { responsiveWidthTablet } from '../../utils/style/jsx/constants';

function Header () {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(160);
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
    let newHeaderHeight;
    if (responsiveWidthTablet < window.innerWidth) {
      if (scrollPosition < scrollThreshold) {
        newHeaderHeight = 160;
      } else {
        newHeaderHeight = 100;
      }
    } else {
      newHeaderHeight = 50;
    }
    setHeaderHeight(newHeaderHeight);
  }, [scrollPosition]);

  const shouldRenderSubtitles = responsiveWidthTablet < window.innerWidth && scrollPosition < scrollThreshold;

  return (
      <HeaderWrapper id='headerWrapper' style={{ height: `${headerHeight}px` }}>
        <LanguagePickerDiv>
          <LanguageMenu/>
        </LanguagePickerDiv>
        <TitleDiv>
          <StyledLinkHeader to="/" onClick={handleOnClick}>
            <StyledTitle>{t('mainTitle')}</StyledTitle>
            {shouldRenderSubtitles && (
            <>
              <StyledSubtitle>{t('subtitle1')}</StyledSubtitle>
              <StyledSubtitle>{t('subtitle2')}</StyledSubtitle>
            </>
            )}
          </StyledLinkHeader>
        </TitleDiv>
        <div>
          <Navbar/>
        </div>

      </HeaderWrapper>
  );
}

export default Header;
