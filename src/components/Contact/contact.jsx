// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Components
import CopyEmailLink from './copyMail';

// Import Datas
import { contactList } from '../../datas/contact';

// Import Style
import { StyledP } from '../../utils/style/js/style';
import { ContactWrapper, ProfilePic } from '../../utils/style/js/ContactStyle';

function ContactInformation () {
  const { t } = useTranslation();

  return (
      <ContactWrapper id='contactWrapper'>
        <StyledP>{t('ContactUs')}</StyledP>
        <StyledP >{contactList[0].name}</StyledP>
        <StyledP >{t('Email')} : <CopyEmailLink email={contactList[0].email} /></StyledP>
        <ProfilePic src={contactList[0].profilePic} alt="PIC"/>
      </ContactWrapper>
  );
}

export default ContactInformation;
