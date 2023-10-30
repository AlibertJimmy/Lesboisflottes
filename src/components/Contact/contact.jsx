import styled from 'styled-components'
import { useTranslation } from "react-i18next"

import CopyEmailLink from './copyMail';

import { contactList } from '../../datas/contact';

const ContactWrapper = styled.div`
    text-align: left;

    border-radius: 15px;
    border: 1px solid black;
`

const ContactContainer = styled.div`
    text-align: left;
    margin: 10px 5px;

    border-radius: 15px;
    border: 1px solid black;
`

const StyledParagraph = styled.p`
    margin: 5px 5px;
`


function ContactInformation() {

    const { t } = useTranslation();

  return (
      <ContactWrapper>
        <h1>{t("Contact")}</h1>
        {contactList.map(contact => (
            <ContactContainer key={contact.name}>
                <StyledParagraph>{contact.name}</StyledParagraph>
                <StyledParagraph>Telephone: {contact.telephone}</StyledParagraph>
                <StyledParagraph>Email: <CopyEmailLink email={contact.email} /></StyledParagraph>
                
            </ContactContainer>
        ))}
      </ContactWrapper>
  )
}

export default ContactInformation
