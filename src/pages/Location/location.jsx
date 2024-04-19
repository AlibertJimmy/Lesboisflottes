// Import React Librarie
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Import Components
import LocationDisplay from '../../components/Location/Location';
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';

// Import Data
import { locationPageContent } from '../../datas/pageContent/locationPageContent';

// Import React Libraries
import React from 'react';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';

function Location () {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(`${locationPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${locationPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
      <PageWrapper id='locationPageWrapper'>
        <PageTitle>{t('Location')}</PageTitle>
        <LocationDisplay/>
        <AddressDisplay/>
        <AccessDisplay/>
      </PageWrapper>
    </>
  );
}

export default Location;
