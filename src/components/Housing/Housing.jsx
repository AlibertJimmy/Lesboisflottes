import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/titles&text';
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/border";

const HousingPresentationWrapper = styled.div`
    font-family: ;
    text-align: left;
    padding: 20px;


    border-radius: 15px;
    border: ${borderWidth}px solid black;
`


function HousingPresentation() {

    const { t } = useTranslation();

  return (
      <HousingPresentationWrapper>
        <StyledH1>{t("Housing")}</StyledH1>
        <StyledP>{t("PresentationHousing1")}</StyledP>
        <StyledP>{t("PresentationHousing2")}</StyledP>
        <StyledP>{t("PresentationHousing3")}</StyledP>
        <StyledP>{t("PresentationHousing4")}</StyledP>
      </HousingPresentationWrapper>
  )
}

export default HousingPresentation
