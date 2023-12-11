// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import { LanguageMenu } from '../LanguageMenu/languageMenu';
import Navbar from '../Nav/Navbar';

// Import Function
import { scrollToTop } from '../../utils/functions/functions';
import { shouldRenderSubtitles } from '../../utils/functions/Header';

// Import Style
import { HeaderWrapper, LanguagePickerDiv, StyledLinkHeader, StyledSubtitle, StyledTitle, TitleDiv } from '../../utils/style/jsx/Header';

function Header () {
  const { t } = useTranslation();

  function handleOnClick () {
    scrollToTop();
  }

  return (
      <HeaderWrapper>
        <LanguagePickerDiv>
          <LanguageMenu/>
        </LanguagePickerDiv>
        <TitleDiv>
          <StyledLinkHeader to="/" onClick={handleOnClick}>
            <StyledTitle>{t('mainTitle')}</StyledTitle>
            {shouldRenderSubtitles() && (
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
