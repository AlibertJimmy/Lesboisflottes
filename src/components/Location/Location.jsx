import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/title';

const LocationWrapper = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: 1px solid black;
`




function LocationDisplay() {

    const { t } = useTranslation();

  return (
      <LocationWrapper>
        <StyledH1>{t("Location")}</StyledH1>
        <p>{t("PresentationSituation1")}</p>
        <p>{t("PresentationSituation2")}</p>
        <p>{t("PresentationSituation3")}</p>
      </LocationWrapper>
  )
}

export default LocationDisplay
