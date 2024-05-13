// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import MapButton from './MapButton';

// Import Style
import { AddressWrapper, AddressContainer, MapContainer } from '../../utils/style/js/Access_Style/Address_Style';
import { PageSubtitle, StyledP } from '../../utils/style/js/Font_Style';

function AddressDisplay () {
  const { t } = useTranslation();

  const googleMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.446246432536!2d5.874743174693204!3d43.074112789693906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90317d9777a33%3A0x39e05a265277e6d0!2s150%20Bd%20Garnault%2C%2083500%20La%20Seyne-sur-Mer!5e0!3m2!1sfr!2sfr!4v1698309848257!5m2!1sfr!2sfr';

  return (
      <AddressWrapper id='addressWrapper'>
        <AddressContainer>
          <PageSubtitle>{t('Address')}</PageSubtitle>
          <StyledP>{`${t('Adress4')}`}</StyledP>
          <StyledP>{`${t('Adress1')} ${t('Adress2')} ${t('Adress3')}`}</StyledP>
          <MapButton/>
        </AddressContainer>
        <MapContainer id='mapContainer'>
          <iframe
            title = "googleMap"
            src={googleMapUrl}
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </AddressWrapper>
  );
}

export default AddressDisplay;
