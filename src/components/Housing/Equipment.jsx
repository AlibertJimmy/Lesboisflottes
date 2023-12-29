// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PageSubtitle, StyledP } from '../../utils/style/js/GlobalStyle';
import { EquipmentListWrapper } from '../../utils/style/js/HousingStyle';

function EquipmentList () {
  const { t } = useTranslation();

  return (
      <EquipmentListWrapper id='equimentListWrapper'>
        <PageSubtitle>{t('IndoorEquipments')} :</PageSubtitle>
        <ul>
          <li><StyledP>{t('Coffeemaker')}</StyledP></li>
          <li><StyledP>{t('ElectricKettle')}</StyledP></li>
          <li><StyledP>{t('Refrigerator')}</StyledP></li>
          <li><StyledP>{t('Microwave')}</StyledP></li>
          <li><StyledP>{t('HairDryer')}</StyledP></li>
          <li><StyledP>{t('Wardrobe')}</StyledP></li>
          <li><StyledP>{t('Fan')}</StyledP></li>
          <li><StyledP>{t('MosquitoRepellentPlug')}</StyledP></li>
        </ul>
        <PageSubtitle>{t('OutdoorEquipments')} :</PageSubtitle>
        <ul>
          <li><StyledP>{t('Sunshade')}</StyledP></li>
          <li><StyledP>{t('ElectricKettle')}</StyledP></li>
          <li><StyledP>{t('PetanqueBall')}</StyledP></li>
          <li><StyledP>{t('Molky')}</StyledP></li>
          <li><StyledP>{t('VintageBicycle')}</StyledP></li>
        </ul>
    </EquipmentListWrapper>

  );
}

export default EquipmentList;
