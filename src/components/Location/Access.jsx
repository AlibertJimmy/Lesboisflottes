import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/titles&text';
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/border";

const AccessWrapper = styled.div`
    font-family: ;
    fon-style: Optima;
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`



function AccessDisplay() {

    const { t } = useTranslation();

  return (
      <AccessWrapper>
        <StyledP>{t("GeneralTransportProposition")}</StyledP>
        <StyledH1>{t("ByCar")}</StyledH1>
        <StyledH1>{t("ByTrain")}</StyledH1>
        <StyledP>{t("TrainTransportDescription1")}</StyledP>
        <StyledP>{t("TrainTransportDescription2")}</StyledP>
        <StyledP>{t("TrainTransportDescription3")}</StyledP>
        <StyledP>{t("TrainTransportDescription4")}</StyledP>
        <StyledP>{t("TrainTransportDescription5")}</StyledP>
        <StyledP>{t("TrainTransportDescription6")}</StyledP>
        <StyledP>{t("TrainTransportDescription7")}</StyledP>
        <StyledP>{t("TrainTransportDescription8")}</StyledP>
        <StyledP>{t("TrainTransportDescription9")}</StyledP>
        <StyledH1>{t("ByPlane")}</StyledH1>
        <StyledP>{t("PlaneTransportDescription1")}</StyledP>
        <StyledP>{t("PlaneTransportDescription2")}</StyledP>
        <StyledP>{t("PlaneTransportDescription3")}</StyledP>
        <StyledP>{t("PlaneTransportDescription4")}</StyledP>
        <StyledP>{t("PlaneTransportDescription5")}</StyledP>
        <StyledP>{t("PlaneTransportDescription6")}</StyledP>
      </AccessWrapper>
  )
}

export default AccessDisplay
