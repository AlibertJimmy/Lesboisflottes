// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import ContactInformation from '../../components/Contact/contact';

// Import Style
import { PageTitle, PageWrapper } from '../../utils/style/js/style';

function Contact () {
  const { t } = useTranslation();

  return (
      <PageWrapper>
        <PageTitle>{t('Contact')}</PageTitle>
        <ContactInformation/>
      </PageWrapper>
  );
}

export default Contact;
