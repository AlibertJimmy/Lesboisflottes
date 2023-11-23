// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import CopyEmailLink from './copyMail';

// Import Datas
import { contactList } from '../../datas/contact';

// Import Style
import styled from 'styled-components';
import { StyledContainer, StyledH1 } from '../../utils/style/jsx/style';

// Import Constants
import { borderWidth, responsiveWidth } from '../../utils/style/jsx/constants';

const ContactContainer = styled.div`
    display: flex;
    margin-top: 40px;
    align-items: center;

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    @media (max-width: ${responsiveWidth}px) {
        flex-direction: column;
    }
`;

const ContactInfoContainer = styled.div`
    padding: 20px;
    min-width: 200px;
`;

const ProfilePicContainer = styled.img`
    max-width: 300px;
    max-height: 300px;
    margin-left: 30px;

`;

const StyledIntro = styled.p`
    padding-left: 20px;
    font-family: cursive;
    font-size: 20px;
`;

function ContactInformation () {
  const { t } = useTranslation();

  return (
      <StyledContainer>
        <StyledH1>{t('Contact')}</StyledH1>
        <StyledIntro>{t('ContactUs')}</StyledIntro>
        {contactList.map(contact => (

            <ContactContainer key={contact.name}>
                <div>
                    <ProfilePicContainer src={contact.profilePic} alt="PIC"></ProfilePicContainer>
                </div>
                <ContactInfoContainer>
                    <StyledIntro style={ { fontFamily: 'cursive', fontSize: '20px' } }>{contact.name}</StyledIntro>
                    <StyledIntro style={ { fontFamily: 'cursive', fontSize: '20px' } }>{t('Email')} : <CopyEmailLink email={contact.email} /></StyledIntro>
                </ContactInfoContainer>
            </ContactContainer>

        ))}
      </StyledContainer>
  );
}

export default ContactInformation;
