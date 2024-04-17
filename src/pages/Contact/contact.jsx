// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import ContactInformation from '../../components/Contact/contact';

// Import Style
import { PageTitle, PageWrapper } from '../../utils/style/js/GlobalStyle';
import ContactForm from '../../components/Contact_Form/Contact_Form';

function Contact () {
  const { t } = useTranslation();

  return (
      <PageWrapper>
        <PageTitle>{t('Contact')}</PageTitle>
        <ContactInformation/>
        <ContactForm/>
      </PageWrapper>
  );
}

export default Contact;
