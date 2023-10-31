import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/title';

const HousingPresentationWrapper = styled.div`
    font-family: ;
    text-align: left;
    padding: 20px;


    border-radius: 15px;
    border: 1px solid black;
`

const StyledParagraph = styled.p`
    font-family: Candassa;
`


function HousingPresentation() {

    const { t } = useTranslation();

  return (
      <HousingPresentationWrapper>
        <StyledH1>{t("Housing")}</StyledH1>
        <StyledParagraph>{t("PresentationHousing1")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing2")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing3")}</StyledParagraph>
        <StyledParagraph>{t("PresentationHousing4")}</StyledParagraph>
      </HousingPresentationWrapper>
  )
}

export default HousingPresentation
