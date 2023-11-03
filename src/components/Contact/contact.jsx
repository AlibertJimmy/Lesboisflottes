import { useTranslation } from "react-i18next"

import CopyEmailLink from './copyMail';

import { contactList } from '../../datas/contact';

import styled from 'styled-components'
import { StyledContainer } from "../../utils/style/jsx/titles&text";
import { StyledH1 } from "../../utils/style/jsx/titles&text";
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/constantes";


const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 10px 0px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

const ContactInfoContainer = styled.div`
    padding: 20px;
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
      <StyledContainer>
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
      </StyledContainer>
  )
}

export default ContactInformation
