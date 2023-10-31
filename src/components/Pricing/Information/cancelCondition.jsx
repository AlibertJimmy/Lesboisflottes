import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import { StyledP } from "../../../utils/style/jsx/titles&text";

import { borderWidth } from "../../../utils/style/jsx/border";

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    margin-left: 0;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
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
