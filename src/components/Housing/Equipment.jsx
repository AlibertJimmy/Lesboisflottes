// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { StyledContainer, PageSubtitle } from '../../utils/style/js/style';

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
        <li>{t('Coffeemaker')}</li>
        <li>{t('ElectricKettle')}</li>
        <li>{t('Refrigerator')}</li>
        <li>{t('Microwave')}</li>
        <li>{t('HairDryer')}</li>
        <li>{t('Wardrobe')}</li>
        <li>{t('Fan')}</li>
        <li>{t('MosquitoRepellentPlug')}</li>
      </ul>
      <PageSubtitle>{t('OutdoorEquipments')} :</PageSubtitle>
      <ul>
        <li>{t('Sunshade')}</li>
        <li>{t('ElectricKettle')}</li>
        <li>{t('PetanqueBall')}</li>
        <li>{t('Molky')}</li>
        <li>{t('VintageBicycle')}</li>
      </ul>
    </ListWrapper>
    </StyledContainer>

  );
}

export default EquipmentList;
