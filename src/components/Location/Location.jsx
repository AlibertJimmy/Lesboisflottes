// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { StyledContainer } from '../../utils/style/js/GlobalStyle';
import { StyledP } from '../../utils/style/js/Font_Style';

function LocationDisplay () {
  const { t } = useTranslation();

  return (
      <StyledContainer id='locationContainer'>
          <StyledP>{t('PresentationSituation1')}</StyledP>
          <StyledP>{t('PresentationSituation2')}</StyledP>
          <StyledP>{t('PresentationSituation3')}</StyledP>
      </StyledContainer>
  );
}

export default LocationDisplay;
