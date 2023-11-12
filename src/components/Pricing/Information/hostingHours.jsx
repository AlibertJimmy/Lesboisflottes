import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2, StyledP } from "../../../utils/style/jsx/style"; 

import { borderWidth, screenWidthMobile,screenWidthTablet } from "../../../utils/style/jsx/constantes";

const HostingHoursContainer = styled.div`
    margin: 0 10px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
    width: 350px;
    height: 170px;

    @media (max-width: ${screenWidthTablet}px){
      
      margin:0;
      width:100%;
      text-align: center;
      
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
