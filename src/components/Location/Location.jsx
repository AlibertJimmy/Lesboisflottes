import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/titles&text';
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/border";


const LocationWrapper = styled.div`
    text-align: left;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`




function LocationDisplay() {

    const { t } = useTranslation();

  return (
      <LocationWrapper>
        <StyledH1>{t("Location")}</StyledH1>
        <StyledP>{t("PresentationSituation1")}</StyledP>
        <StyledP>{t("PresentationSituation2")}</StyledP>
        <StyledP>{t("PresentationSituation3")}</StyledP>
      </LocationWrapper>
  )
}

export default LocationDisplay
