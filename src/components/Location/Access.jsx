// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import AccessTransport from './AccessTransport';
import AccessParking from './AccessParking';

// Import Style
import { AccessIntroP, AccessTransportWrapper, AccessWrapper } from '../../utils/style/js/Access_Style/Access_Style';

function AccessDisplay () {
  const { t } = useTranslation();

  return (
      <AccessWrapper id='accessWrapper'>
        <AccessIntroP>{t('GeneralTransportProposition')}</AccessIntroP>
        <AccessTransportWrapper>
          <AccessTransport transport={'Car'}/>
          <AccessTransport transport={'Train'}/>
          <AccessTransport transport={'Plane'}/>
        </AccessTransportWrapper>
        <AccessParking/>
      </AccessWrapper>
  );
}

export default AccessDisplay;
