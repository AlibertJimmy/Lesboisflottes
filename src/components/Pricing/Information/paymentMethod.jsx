import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";

const PaymentMethodContainer = styled.div`
    margin: 0 10px;
    min-width: 230px;

    border-radius: 15px;
    border: 1px solid black;
`



function PaymentMethod() {

    const { t } = useTranslation();

  return (
      <PaymentMethodContainer>
        <StyledH2>{t("PaymentMethodTitle")}</StyledH2>
        <ul>
            <li>{t("PaymentMethodText2")}</li>
            <li>{t("PaymentMethodText3")}</li>
            <li>{t("PaymentMethodText4")}</li>
        </ul>
      </PaymentMethodContainer>
  )
}

export default PaymentMethod
