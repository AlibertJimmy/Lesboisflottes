import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/title';

const AccessWrapper = styled.div`
    font-family: ;
    fon-style: Optima;
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: 1px solid black;
`



function AccessDisplay() {

    const { t } = useTranslation();

  return (
      <AccessWrapper>
        <p>{t("GeneralTransportProposition")}</p>
        <StyledH1>{t("ByCar")}</StyledH1>
        <StyledH1>{t("ByTrain")}</StyledH1>
        <p>{t("TrainTransportDescription1")}</p>
        <p>{t("TrainTransportDescription2")}</p>
        <p>{t("TrainTransportDescription3")}</p>
        <p>{t("TrainTransportDescription4")}</p>
        <p>{t("TrainTransportDescription5")}</p>
        <p>{t("TrainTransportDescription6")}</p>
        <p>{t("TrainTransportDescription7")}</p>
        <p>{t("TrainTransportDescription8")}</p>
        <p>{t("TrainTransportDescription9")}</p>
        <StyledH1>{t("ByPlane")}</StyledH1>
        <p>{t("PlaneTransportDescription1")}</p>
        <p>{t("PlaneTransportDescription2")}</p>
        <p>{t("PlaneTransportDescription3")}</p>
        <p>{t("PlaneTransportDescription4")}</p>
        <p>{t("PlaneTransportDescription5")}</p>
        <p>{t("PlaneTransportDescription6")}</p>
      </AccessWrapper>
  )
}

export default AccessDisplay
