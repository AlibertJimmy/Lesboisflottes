import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import { StyledP } from "../../../utils/style/jsx/titles&text";

import { borderWidth, screenWidth } from "../../../utils/style/jsx/constantes";

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    margin-left: 0;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${screenWidth}px){

      margin:0;
      
    }
`



function CancelCondition() {

    const { t } = useTranslation();

  return (
      <CancelConditionContainer>
        <StyledH2>{t("CancelConditionTitle")}</StyledH2>
        <StyledP>{t("CancelConditionText")}</StyledP>
      </CancelConditionContainer>
  )
}

export default CancelCondition
