import styled from 'styled-components'
import { useTranslation } from "react-i18next"

const PaymentMethodContainer = styled.div`
    margin: 10px;
    min-width: 200px;

    border-radius: 15px;
    border: 1px solid black;
`



function PaymentMethod() {

    const { t } = useTranslation();

  return (
      <PaymentMethodContainer>
        <h3>{t("paymentMethodTitle")}</h3>
        <p>{t("paymentMethodText1")}</p>
        <ul>
            <li>{t("paymentMethodText2")}</li>
            <li>{t("paymentMethodText3")}</li>
            <li>{t("paymentMethodText4")}</li>
        </ul>
      </PaymentMethodContainer>
  )
}

export default PaymentMethod
