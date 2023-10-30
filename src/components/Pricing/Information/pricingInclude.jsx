import styled from 'styled-components'
import { useTranslation } from "react-i18next"

const PricingIncludeContainer = styled.div`
    margin: 10px;
    min-width: 200px;

    border-radius: 15px;
    border: 1px solid black;
`



function PricingInclude() {

    const { t } = useTranslation();

  return (
      <PricingIncludeContainer>
        <h3>{t("pricingIncludeTitle")}</h3>
        <p>{t("pricingIncludeText1")}</p>
        <ul>
            <li>{t("pricingIncludeText2")}</li>
            <li>{t("pricingIncludeText3")}</li>
            <li>{t("pricingIncludeText4")}</li>
        </ul>
      </PricingIncludeContainer>
  )
}

export default PricingInclude
