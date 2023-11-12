import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2, StyledP } from "../../../utils/style/jsx/style";

import { borderWidth, screenWidthMobile, screenWidthTablet } from "../../../utils/style/jsx/constantes";

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    

    border-radius: 15px;
    border: ${borderWidth}px solid black;
    width: 350px;
    height: 170px;


    @media (max-width: ${screenWidthTablet}px){
      margin: 0;
      width:100%;
      text-align: center;
      
    }

    @media (max-width: ${screenWidthMobile}px){
      width:100%;
      
      
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
