import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/title';

const AddressWrapper = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: 1px solid black;
`

const MapWarper = styled.div`
    text-align: center;
    padding: 20px;

    position: relative;

    border-radius: 15px;
    border: 1px solid black;

    flex-grow: 1;
`


const SituationWarper = styled.div`
  display: flex;
  flex-direction: row;
`



function AddressDisplay() {

    const { t } = useTranslation();

    const googleMapUrl = 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.446246432536!2d5.874743174693204!3d43.074112789693906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90317d9777a33%3A0x39e05a265277e6d0!2s150%20Bd%20Garnault%2C%2083500%20La%20Seyne-sur-Mer!5e0!3m2!1sfr!2sfr!4v1698309848257!5m2!1sfr!2sfr";

  return (
      <SituationWarper>
        <AddressWrapper>
          <StyledH1>{t("Address")}</StyledH1>
          <p>{t("Adress1")}</p>
          <p>{t("Adress2")}</p>
          <p>{t("Adress3")}</p>
          <p>{t("Adress4")}</p>
        </AddressWrapper>
        <MapWarper>
        <iframe
          title = "googleMap"
          src={googleMapUrl}
          width="100%"
          height="200"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        </MapWarper>
      </SituationWarper>
  )
}

export default AddressDisplay
