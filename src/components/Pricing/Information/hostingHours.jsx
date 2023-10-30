import styled from 'styled-components'
import { useTranslation } from "react-i18next"

const HostingHoursContainer = styled.div`
    margin: 10px;

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
        <h3>{t("hostingHoursTitle")}</h3>
        <StyledParagraph>{t("hostingHoursText")}</StyledParagraph>
      </HostingHoursContainer>
  )
}

export default HostingHours
