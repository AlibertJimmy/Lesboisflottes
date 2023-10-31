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
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 10px 0px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const ContactInfoContainer = styled.div`
    min-width: 200px;
`

const ProfilePicContainer = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin-left: 30px;
`

function ContactInformation() {

    const { t } = useTranslation();

  return (
      <ContactWrapper>
        <StyledH1>{t("Contact")}</StyledH1>
        {contactList.map(contact => (
            
            <ContactContainer key={contact.name}>
                <ContactInfoContainer>
                    <StyledP>{contact.name}</StyledP>
                    <StyledP>{t("Phone")} : {contact.telephone}</StyledP>
                    <StyledP>{t("Email")} : <CopyEmailLink email={contact.email} /></StyledP>
                </ContactInfoContainer>
                <div>
                    <ProfilePicContainer src={contact.profilePic} alt="PIC"></ProfilePicContainer>
                </div>
            </ContactContainer>
            
        ))}
      </ContactWrapper>
  )
}

export default ContactInformation
