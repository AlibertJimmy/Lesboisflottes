// Import React Librarie
import { useTranslation } from 'react-i18next';

// Import Components
import LocationDisplay from '../../components/Location/Location';
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';

// Import React Libraries
import React from 'react';

// Import Style
import { PageTitle, PageWrapper } from '../../utils/style/js/GlobalStyle';
function Location () {
  const { t } = useTranslation();
  return (
      <PageWrapper id='locationPageWrapper'>
        <PageTitle>{t('Location')}</PageTitle>
        <LocationDisplay/>
        <AddressDisplay/>
        <AccessDisplay/>
      </PageWrapper>
  );
}

export default Location;
