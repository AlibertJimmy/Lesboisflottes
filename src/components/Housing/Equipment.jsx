import styled from 'styled-components'

import { useTranslation } from "react-i18next";




const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: ;
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: 1px solid black;
`

const StyledSubTitle = styled.h2`
    font-family: Brordlay Hand;
`

function EquipmentList() {

    const { t } = useTranslation();

  return (
    <ListWrapper>
    <StyledSubTitle>{t("Indoor")}</StyledSubTitle>
    <ul>
      <li>{t("Coffeemaker")}</li>
      <li>{t("ElectricKettle")}</li>
      <li>{t("Refrigerator")}</li>
      <li>{t("Microwave")}</li>
      <li>{t("HairDryer")}</li>
      <li>{t("Wardrobe")}</li>
      <li>{t("Fan")}</li>
      <li>{t("MosquitoRepellentPlug")}</li>
    </ul>
    <StyledSubTitle>{t("Outdoor")}</StyledSubTitle>
    <ul>
      <li>{t("Sunshade")}</li>
      <li>{t("ElectricKettle")}</li>
      <li>{t("PetanqueBall")}</li>
      <li>{t("Molky")}</li>
      <li>{t("VintageBicycle")}</li>
    </ul>
    </ListWrapper>
  )
}

export default EquipmentList
