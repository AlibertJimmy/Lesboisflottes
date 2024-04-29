// Import React Librarie
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Import Components
import LocationDisplay from '../../components/Location/Location';
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';

// Import Data
import { locationPageContent } from '../../datas/pageContent/locationPageContent';
import { iconsListTransport } from '../../datas/testTransportIcons';

// Import Image
import accessIllustration from '../../assets/topIllustrations/AccessTopIllustration.jpg';

// Import React Libraries
import React from 'react';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';
import HousingEquipmentIcon from '../../components/Housing/HousingEquipmentIcon';
import TopIllustration from '../../components/TopIllustration/TopIllustration';

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
        <PageTitle>{t('Location')}</PageTitle>
        <LocationDisplay/>
        <AddressDisplay/>
        <AccessDisplay/>
        <HousingEquipmentIcon iconsList={iconsListTransport}/>
      </PageWrapper>
    </>
  );
}

export default Location;
