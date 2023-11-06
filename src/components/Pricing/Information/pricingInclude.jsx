import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";

import { borderWidth, screenWidthMobile, screenWidthTablet } from "../../../utils/style/jsx/constantes";

const PricingIncludeContainer = styled.div`
    margin: 0 10px;
    min-width: 200px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${screenWidthTablet}px){
      
      margin:0;
      
    }

    @media (max-width: ${screenWidthMobile}px){

      margin:10px 0;
    }
`



function PricingInclude() {

    const { t } = useTranslation();

  return (
      <PricingIncludeContainer>
        <StyledH2>{t("PricingIncludeTitle")}</StyledH2>
        <ul>
            <li>{t("PricingIncludeText1")}<br></br>{t("PricingIncludeText1bis")}</li>
            <li>{t("PricingIncludeText2")}</li>
            <li>{t("PricingIncludeText3")}</li>
        </ul>
      </PricingIncludeContainer>
  )
}

export default PricingInclude
