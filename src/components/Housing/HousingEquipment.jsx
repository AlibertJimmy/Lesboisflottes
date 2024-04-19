// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PageSubtitle, StyledP } from '../../utils/style/js/Font_Style';
import { HousingEquipmentListContainer, HousingEquipmentListWrapper } from '../../utils/style/js/Housing_Style/HousingEquipment_Style';

function HousingEquipmentList () {
  const { t } = useTranslation();

  return (
    <HousingEquipmentListWrapper id='housingEquipmentListWrapper'>
      <HousingEquipmentListContainer id='HousingEquipmentListContainer-Indoor'>
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
      </HousingEquipmentListContainer>
      <HousingEquipmentListContainer id='</HousingEquipmentListContainer>-Outdoor'>
        <PageSubtitle>{t('OutdoorEquipments')} :</PageSubtitle>
        <ul>
          <li><StyledP>{t('Sunshade')}</StyledP></li>
          <li><StyledP>{t('ElectricKettle')}</StyledP></li>
          <li><StyledP>{t('PetanqueBall')}</StyledP></li>
          <li><StyledP>{t('Molky')}</StyledP></li>
          <li><StyledP>{t('VintageBicycle')}</StyledP></li>
        </ul>
      </HousingEquipmentListContainer>
  </HousingEquipmentListWrapper>

  );
}

export default HousingEquipmentList;
