// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { StyledH1, StyledP, StyledContainer } from '../../utils/style/jsx/style';

function AccessDisplay () {
  const { t } = useTranslation();

  return (
      <StyledContainer>
        <StyledP>{t('GeneralTransportProposition')}</StyledP>
        <StyledH1>{t('ByCar')}</StyledH1>
        <StyledH1>{t('ByTrain')}</StyledH1>
        <StyledP>{t('TrainTransportDescription1')}</StyledP>
        <StyledP>{t('TrainTransportDescription2')}</StyledP>
        <StyledP>{t('TrainTransportDescription3')}</StyledP>
        <StyledP>{t('TrainTransportDescription4')}</StyledP>
        <StyledP>{t('TrainTransportDescription5')}</StyledP>
        <StyledP>{t('TrainTransportDescription6')}</StyledP>
        <StyledP>{t('TrainTransportDescription7')}</StyledP>
        <StyledP>{t('TrainTransportDescription8')}</StyledP>
        <StyledP>{t('TrainTransportDescription9')}</StyledP>
        <StyledH1>{t('ByPlane')}</StyledH1>
        <StyledP>{t('PlaneTransportDescription1')}</StyledP>
        <StyledP>{t('PlaneTransportDescription2')}</StyledP>
        <StyledP>{t('PlaneTransportDescription3')}</StyledP>
        <StyledP>{t('PlaneTransportDescription4')}</StyledP>
        <StyledP>{t('PlaneTransportDescription5')}</StyledP>
        <StyledP>{t('PlaneTransportDescription6')}</StyledP>
      </StyledContainer>
  );
}

export default AccessDisplay;
