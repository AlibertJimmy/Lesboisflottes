// Import React Librarie
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Import Components
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';
import TopIllustration from '../../components/TopIllustration/TopIllustration';

// Import Data
import { locationPageContent } from '../../datas/pageContent/locationPageContent';

// Import Image
import accessIllustration from '../../assets/topIllustrations/AccessTopIllustration.jpg';

// Import React Libraries
import React from 'react';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';

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
      <TopIllustration image={accessIllustration} title={'Access'}/>
      <PageWrapper id='locationPageWrapper'>
        <AddressDisplay/>
        <AccessDisplay/>
      </PageWrapper>
    </>
  );
}

export default Location;
