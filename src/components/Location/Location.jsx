// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { StyledP, StyledContainer } from '../../utils/style/js/style';

function LocationDisplay () {
  const { t } = useTranslation();

  return (
      <StyledContainer>
          <StyledP>{t('PresentationSituation1')}</StyledP>
          <StyledP>{t('PresentationSituation2')}</StyledP>
          <StyledP>{t('PresentationSituation3')}</StyledP>
      </StyledContainer>
  );
}

export default LocationDisplay;
