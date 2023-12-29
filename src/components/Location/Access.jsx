// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PageSubtitle, StyledP, StyledContainer } from '../../utils/style/js/GlobalStyle';

function AccessDisplay () {
  const { t } = useTranslation();

  return (
      <StyledContainer id='accessWrapper'>
        <StyledP>{t('GeneralTransportProposition')}</StyledP>
        <PageSubtitle>{t('ByTrain')}</PageSubtitle>
        <ul>
          <li><StyledP>{t('TrainTransportDescription1')}</StyledP></li>
          <li style={ { listStyle: 'none' } }><StyledP>{t('TrainTransportDescription2')}</StyledP></li>
          <ul>
          <li><StyledP>{t('TrainTransportDescription3')}</StyledP></li>
          <li><StyledP>{t('TrainTransportDescription4')}</StyledP></li>
          </ul>
        </ul>
        <ul>
          <li><StyledP>{t('TrainTransportDescription5')}</StyledP></li>
            <li style={ { listStyle: 'none' } }><StyledP>{t('TrainTransportDescription6')}</StyledP></li>
            <ul>
              <li><StyledP>{t('TrainTransportDescription7')}</StyledP></li>
              <li><StyledP>{t('TrainTransportDescription8')}</StyledP></li>
              <li><StyledP>{t('TrainTransportDescription9')}</StyledP></li>
              <br></br>
              <li><StyledP>{t('TrainTransportDescription10')}</StyledP></li>
              <li><StyledP>{t('TrainTransportDescription11')}</StyledP></li>
              <li><StyledP>{t('TrainTransportDescription12')}</StyledP></li>
              <li><StyledP>{t('TrainTransportDescription13')}</StyledP></li>
            </ul>
        </ul>
        <PageSubtitle>{t('ByPlane')}</PageSubtitle>
        <ul>
          <li><StyledP>{t('PlaneTransportDescription1')}</StyledP></li>
          <ul>
            <li><StyledP>{t('PlaneTransportDescription2')}</StyledP></li>
          </ul>
        </ul>
        <ul>
          <li><StyledP>{t('PlaneTransportDescription3')}</StyledP></li>
          <ul>
            <li><StyledP>{t('PlaneTransportDescription4')}</StyledP></li>
          </ul>
        </ul>
        <ul>
          <li><StyledP>{t('PlaneTransportDescription5')}</StyledP></li>
          <ul>
            <li><StyledP>{t('PlaneTransportDescription6')}</StyledP></li>
          </ul>
        </ul>
      </StyledContainer>
  );
}

export default AccessDisplay;
