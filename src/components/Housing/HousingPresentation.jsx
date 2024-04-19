// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { StyledP } from '../../utils/style/js/Font_Style';
import { HousingPresentationContainer } from '../../utils/style/js/Housing_Style/HousingPresentation_Style';

function HousingPresentation () {
  const { t } = useTranslation();

  return (
    <HousingPresentationContainer>
      <StyledP>{t('PresentationHousing1')}</StyledP>
      <StyledP>{t('PresentationHousing2')}</StyledP>
      <StyledP>{t('PresentationHousing3')}</StyledP>
      <StyledP>{t('PresentationHousing4')}</StyledP>
    </HousingPresentationContainer>
  );
}

export default HousingPresentation;
