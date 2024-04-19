// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { StyledContainer } from '../../utils/style/js/GlobalStyle';
import { StyledP } from '../../utils/style/js/Font_Style';

function HousingPresentation () {
  const { t } = useTranslation();

  return (
      <StyledContainer>
        <StyledP>{t('PresentationHousing1')}</StyledP>
        <StyledP>{t('PresentationHousing2')}</StyledP>
        <StyledP>{t('PresentationHousing3')}</StyledP>
        <StyledP>{t('PresentationHousing4')}</StyledP>
      </StyledContainer>
  );
}

export default HousingPresentation;
