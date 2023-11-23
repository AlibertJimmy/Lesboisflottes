// Import Components
import LocationDisplay from '../../components/Location/Location';
import AddressDisplay from '../../components/Location/Address';
import AccessDisplay from '../../components/Location/Access';

// Import React Libraries
import React from 'react';

// Import Style
import { PageWrapper } from '../../utils/style/jsx/style';
function Location () {
  return (
      <PageWrapper>
        <LocationDisplay/>
        <AddressDisplay/>
        <AccessDisplay/>
      </PageWrapper>
  );
}

export default Location;
