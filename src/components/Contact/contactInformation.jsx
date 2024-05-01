// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import CopyEmailLink from './copyMail';

// Import Datas
import { contactList } from '../../datas/contact';

// Import Style
import { ProfilePic } from '../../utils/style/js/Contact/ContactStyle';
import { StyledP } from '../../utils/style/js/Font_Style';
import { ContactInformationContainer } from '../../utils/style/js/Contact/ContactInformation_Style';

function ContactInformation () {
  const { t } = useTranslation();

  return (
      <ContactInformationContainer id='contactInformationContainer'>
        <StyledP>{t('ContactUs')}</StyledP>
        <StyledP >{contactList[0].name}</StyledP>
        <StyledP >{t('Email')} : <CopyEmailLink email={contactList[0].email} /></StyledP>
        <ProfilePic src={contactList[0].profilePic} alt="PIC"/>
      </ContactInformationContainer>
  );
}

export default ContactInformation;
