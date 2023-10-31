import { useTranslation } from "react-i18next"

import styled from 'styled-components'
import { StyledH2 } from "../../../utils/style/jsx/titles&text";
import { StyledP } from "../../../utils/style/jsx/titles&text"

const HostingHoursContainer = styled.div`
    margin: 0 10px;

    border-radius: 15px;
    border: 1px solid black;
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
