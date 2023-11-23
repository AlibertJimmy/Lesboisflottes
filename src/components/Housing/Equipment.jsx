// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { StyledContainer, StyledH1, StyledH2 } from '../../utils/style/jsx/style';

import { borderWidth, responsiveWidth } from '../../utils/style/jsx/constants';

const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Avantgarde;

    text-align: left;
    padding: 0 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${responsiveWidth}px) {
      flex-direction: column;
    }
`;

function EquipmentList () {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledH1>{t('TheDifferentEquipments')}</StyledH1>
      <ListWrapper>
      <StyledH2>{t('Indoor')}</StyledH2>
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
      <StyledH2>{t('Outdoor')}</StyledH2>
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
