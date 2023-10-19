import styled from 'styled-components'

import { useTranslation } from "react-i18next";

const AccessWrapper = styled.div`
    font-family: ;
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
        <h1>{t("ByCar")}</h1>
        <h1>{t("ByTrain")}</h1>
        <p>{t("TrainTransportDescription1")}</p>
        <p>{t("TrainTransportDescription2")}</p>
        <p>{t("TrainTransportDescription3")}</p>
        <p>{t("TrainTransportDescription4")}</p>
        <p>{t("TrainTransportDescription5")}</p>
        <p>{t("TrainTransportDescription6")}</p>
        <p>{t("TrainTransportDescription7")}</p>
        <p>{t("TrainTransportDescription8")}</p>
        <p>{t("TrainTransportDescription9")}</p>
        <h1>{t("ByPlane")}</h1>
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
