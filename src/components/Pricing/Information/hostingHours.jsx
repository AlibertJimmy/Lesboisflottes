import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import { StyledP } from "../../../utils/style/jsx/titles&text"

import { borderWidth, screenWidthMobile,screenWidthTablet } from "../../../utils/style/jsx/constantes";

const HostingHoursContainer = styled.div`
    margin: 0 10px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${screenWidthTablet}px){
      
      margin:0;
      
    }

    @media (max-width: ${screenWidthMobile}px){

      margin:10px 0;
    }
`



function HostingHours() {

    const { t } = useTranslation();

  return (
      <HostingHoursContainer>
        <StyledH2>{t("HostingHoursTitle")}</StyledH2>
        <StyledP>{t("HostingHoursText")}</StyledP>
      </HostingHoursContainer>
  )
}

export default HostingHours
