// Import React Librarie
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { AdressButton } from '../../utils/style/js/Access_Style/Address_Style';

function MapButton () {
  const { t } = useTranslation();
  const mapUrl = 'https://www.google.fr/maps/place/150+Bd+Garnault,+83500+La+Seyne-sur-Mer/@43.0741279,5.8748519,17z/data=!3m1!4b1!4m6!3m5!1s0x12c90317d9777a33:0x39e05a265277e6d0!8m2!3d43.074124!4d5.8774268!16s%2Fg%2F11c4nrt32m?entry=ttu';

  const openMap = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <AdressButton onClick={openMap}>{t('GoToAddress')}</AdressButton>
  );
};

export default MapButton;
