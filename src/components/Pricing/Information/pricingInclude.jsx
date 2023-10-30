import styled from 'styled-components'
import { useTranslation } from "react-i18next"

const PricingIncludeContainer = styled.div`
    margin: 0 10px;
    margin-right: 0;
    min-width: 200px;

    border-radius: 15px;
    border: 1px solid black;
`



function PricingInclude() {

    const { t } = useTranslation();

  return (
      <PricingIncludeContainer>
        <h3>{t("pricingIncludeTitle")}</h3>
        <ul>
            <li>{t("pricingIncludeText1")}<br></br>{t("pricingIncludeText1bis")}</li>
            <li>{t("pricingIncludeText2")}</li>
            <li>{t("pricingIncludeText3")}</li>
        </ul>
      </PricingIncludeContainer>
  )
}

export default PricingInclude
