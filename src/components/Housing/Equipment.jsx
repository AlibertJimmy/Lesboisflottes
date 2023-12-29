// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { StyledContainer, PageSubtitle, StyledP } from '../../utils/style/js/style';

import { responsiveWidthMobile } from '../../utils/constants';

const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Avantgarde;

    text-align: left;
    padding: 0 20px;

    border-radius: 15px;

    @media (max-width: ${responsiveWidthMobile}px) {
      flex-direction: column;
    }
`;

function EquipmentList () {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <ListWrapper>
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
    </ListWrapper>
    </StyledContainer>

  );
}

export default EquipmentList;
