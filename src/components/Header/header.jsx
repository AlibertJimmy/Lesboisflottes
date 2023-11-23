// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import { LanguageMenu } from '../LanguageMenu/languageMenu';
import Navbar from '../Nav/Navbar';

// Import Function
import { scrollToTop } from '../../utils/functions/functions';

// Import Style
import styled from 'styled-components';
import { HeaderWrapper, StyledLinkHeader } from '../../utils/style/jsx/style';

// Import Constantes
import { borderWidth } from '../../utils/style/jsx/constants';

const TitleDiv = styled.div`
  text-align: center;

  border-radius: 15px;
  border: ${borderWidth}px solid black;

  
`;

const LanguagePickerDiv = styled.div`
  text-align: right;

  margin: 0px;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin-top: 0px;
  margin-bottom: 5px;
`;

const StyledSubtitle = styled.h2`
  font-size: 20px;
  
  margin: 5px;
`;

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
            <StyledSubtitle>{t('subtitle1')}</StyledSubtitle>
            <StyledSubtitle>{t('subtitle2')}</StyledSubtitle>
          </StyledLinkHeader>
        </TitleDiv>
        <div>
          <Navbar/>
        </div>

      </HeaderWrapper>
  );
}

export default Header;
//
