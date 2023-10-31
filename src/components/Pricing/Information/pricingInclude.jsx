import { useTranslation } from "react-i18next"

import styled from 'styled-components'

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
        <h3>{t("PricingIncludeTitle")}</h3>
        <ul>
            <li>{t("PricingIncludeText1")}<br></br>{t("PricingIncludeText1bis")}</li>
            <li>{t("PricingIncludeText2")}</li>
            <li>{t("PricingIncludeText3")}</li>
        </ul>
      </PricingIncludeContainer>
  )
}

export default PricingInclude
