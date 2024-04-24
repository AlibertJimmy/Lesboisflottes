// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { PageSubtitle, StyledP } from '../../utils/style/js/Font_Style';
import { HousingEquipmentContainer, HousingEquipmentListContainer, HousingEquipmentListWrapper, HousingEquipmentWrapper } from '../../utils/style/js/Housing_Style/HousingEquipment_Style';

function HousingEquipmentList () {
  const { t } = useTranslation();

  return (
    <HousingEquipmentWrapper id='housingEquipmentWrapper'>
      <HousingEquipmentContainer id='housingEquipmentContainer-Indoor'>
        <PageSubtitle>{t('IndoorEquipments')} :</PageSubtitle>
        <HousingEquipmentListWrapper>
          <HousingEquipmentListContainer>
            <ul>
              <li><StyledP>{t('Microwave')}</StyledP></li>

              <li><StyledP>{t('Coffeemaker')}</StyledP></li>
              <li><StyledP>{t('Fan')}</StyledP></li>
              <li><StyledP>{t('HairDryer')}</StyledP></li>
            </ul>
          </HousingEquipmentListContainer>
          <HousingEquipmentListContainer>
            <ul>
              <li><StyledP>{t('Refrigerator')}</StyledP></li>
              <li><StyledP>{t('ElectricKettle')}</StyledP></li>
              <li><StyledP>{t('MosquitoRepellentPlug')}</StyledP></li>
            </ul>
          </HousingEquipmentListContainer>
        </HousingEquipmentListWrapper>
      </HousingEquipmentContainer>

      <HousingEquipmentContainer id='housingEquipmentContainer-Outdoor'>
        <PageSubtitle>{t('OutdoorEquipments')} :</PageSubtitle>
        <HousingEquipmentListWrapper id='housingEquipmentContainer>-Outdoor'>
          <HousingEquipmentListContainer>
            <ul>
              <li><StyledP>{t('Molky')}</StyledP></li>
              <li><StyledP>{t('PetanqueBall')}</StyledP></li>
            </ul>
          </HousingEquipmentListContainer>
          <HousingEquipmentListContainer>
            <ul>
              <li><StyledP>{t('Sunshade')}</StyledP></li>
              <li><StyledP>{t('VintageBicycle')}</StyledP></li>
            </ul>
          </HousingEquipmentListContainer>
        </HousingEquipmentListWrapper>
      </HousingEquipmentContainer>
  </HousingEquipmentWrapper>

  );
}

export default HousingEquipmentList;
