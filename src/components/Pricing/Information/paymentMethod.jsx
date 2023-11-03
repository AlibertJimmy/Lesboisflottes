import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";

import { borderWidth, screenWidth } from "../../../utils/style/jsx/constantes";

const PaymentMethodContainer = styled.div`
    margin: 0 10px;
    min-width: 230px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${screenWidth}px){

      margin:0;
    }
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
