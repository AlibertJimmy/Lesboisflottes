import { useTranslation } from "react-i18next"

import CopyEmailLink from './copyMail';

import { contactList } from '../../datas/contact';

import styled from 'styled-components'
import { StyledH1 } from "../../utils/style/jsx/titles&text";
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/border";

const ContactWrapper = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const ContactContainer = styled.div`
    text-align: left;
    margin: 10px 0px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`



function ContactInformation() {

    const { t } = useTranslation();

  return (
      <ContactWrapper>
        <StyledH1>{t("Contact")}</StyledH1>
        {contactList.map(contact => (
            <ContactContainer key={contact.name}>
                <StyledP>{contact.name}</StyledP>
                <StyledP>Telephone: {contact.telephone}</StyledP>
                <StyledP>Email: <CopyEmailLink email={contact.email} /></StyledP>
            </ContactContainer>
        ))}
      </ContactWrapper>
  )
}

export default ContactInformation
