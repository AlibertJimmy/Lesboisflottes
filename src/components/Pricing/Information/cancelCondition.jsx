import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import { StyledP } from "../../../utils/style/jsx/titles&text";

import { borderWidth, screenWidthMobile, screenWidthTablet } from "../../../utils/style/jsx/constantes";

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    

    border-radius: 15px;
    border: ${borderWidth}px solid black;


    @media (max-width: ${screenWidthTablet}px){
      
      margin: 0;
      
    }

    @media (max-width: ${screenWidthMobile}px){

      margin:10px 0;
      
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
