import { useTranslation } from "react-i18next"

import styled from 'styled-components'

const PaymentMethodContainer = styled.div`
    margin: 0 10px;
    min-width: 200px;

    border-radius: 15px;
    border: 1px solid black;
`



function PaymentMethod() {

    const { t } = useTranslation();

  return (
      <PaymentMethodContainer>
        <h3>{t("PaymentMethodTitle")}</h3>
        <ul>
            <li>{t("PaymentMethodText2")}</li>
            <li>{t("PaymentMethodText3")}</li>
            <li>{t("PaymentMethodText4")}</li>
        </ul>
      </PaymentMethodContainer>
  )
}

export default PaymentMethod
