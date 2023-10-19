import styled from 'styled-components'

import { useTranslation } from "react-i18next";

const AddressWrapper = styled.div`
    font-family: ;
    text-align: left;
    padding: 20px;
    
    border-radius: 15px;
    border: 1px solid black;
`



function AddressDisplay() {

    const { t } = useTranslation();

  return (
      <AddressWrapper>
        <h1>{t("Adress")}</h1>
        <p>{t("Adress1")}</p>
        <p>{t("Adress2")}</p>
        <p>{t("Adress3")}</p>
        <p>{t("Adress4")}</p>
      </AddressWrapper>
  )
}

export default AddressDisplay
