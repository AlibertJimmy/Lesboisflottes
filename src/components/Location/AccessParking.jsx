// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components

// Import Datas
import { accessPageContent } from '../../datas/pageContent/accessPageContent';

// Import Style
import { PageSubtitle, StyledP } from '../../utils/style/js/Font_Style';
import {
  AccessParkingContainer,
  AccessParkingTextContainer,
  AccessTransportTitleContainer
} from '../../utils/style/js/Access_Style/Access_Style';
import IconSwitchCase from '../IconSwitchCase/IconSwitchCase';

function AccessParking () {
  const { t } = useTranslation();

  return (
      <AccessParkingContainer id='accessParkingContainer'>
        <AccessTransportTitleContainer>
          <IconSwitchCase iconsName={'faSquareParking'} iconsColor={'icons'}/>
          <PageSubtitle>{t('Parking')}</PageSubtitle>
        </AccessTransportTitleContainer>
        <AccessParkingTextContainer>
          <StyledP>
            {t(accessPageContent.parkingDescription)}
          </StyledP>
        </AccessParkingTextContainer>
      </AccessParkingContainer>
  );
}

export default AccessParking;
