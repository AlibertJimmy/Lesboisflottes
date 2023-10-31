import { useTranslation } from "react-i18next"

import styled from 'styled-components'

const HostingHoursContainer = styled.div`
    margin: 0 10px;

    border-radius: 15px;
    border: 1px solid black;
`
const StyledParagraph = styled.p`
    margin: 0px 0px;
`


function HostingHours() {

    const { t } = useTranslation();

  return (
      <HostingHoursContainer>
        <h3>{t("HostingHoursTitle")}</h3>
        <StyledParagraph>{t("HostingHoursText")}</StyledParagraph>
      </HostingHoursContainer>
  )
}

export default HostingHours
