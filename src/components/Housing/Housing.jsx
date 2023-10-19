import styled from 'styled-components'

import { useTranslation } from "react-i18next";


const HousingPresentationWrapper = styled.div`
    font-family: ;
    text-align: left;
    padding: 20px;


    border-radius: 15px;
    border: 1px solid black;
`
const StyledTitle = styled.h1`
    font-family: Brordlay Hand;
`

const StyledParagraph = styled.p`
    font-family: Candassa;
`


function HousingPresentation() {

    const { t } = useTranslation();

  return (
      <HousingPresentationWrapper>
        <StyledTitle>{t("Housing")}</StyledTitle>
        <StyledParagraph>{t("PresentationHousing1")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing2")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing3")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing4")}</StyledParagraph>
        <StyledTitle>{t("TheDifferentEquipments")}</StyledTitle>
      </HousingPresentationWrapper>
  )
}

export default HousingPresentation
