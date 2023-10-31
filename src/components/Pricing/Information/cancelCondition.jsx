import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledP } from "../../../utils/style/jsx/titles&text";

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    margin-left: 0;

    border-radius: 15px;
    border: 1px solid black;
`



function CancelCondition() {

    const { t } = useTranslation();

  return (
      <CancelConditionContainer>
        <h3>{t("CancelConditionTitle")}</h3>
        <StyledP>{t("CancelConditionText")}</StyledP>
      </CancelConditionContainer>
  )
}

export default CancelCondition
