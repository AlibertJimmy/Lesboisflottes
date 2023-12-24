// Import Components
import LocationDisplay from '../../components/Location/Location';
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';

// Import React Libraries
import React from 'react';

// Import Style
import { PageWrapper } from '../../utils/style/js/style';
function Location () {
  return (
      <PageWrapper id='locationPageWrapper'>
        <LocationDisplay/>
        <AddressDisplay/>
        <AccessDisplay/>
      </PageWrapper>
  );
}

export default Location;
