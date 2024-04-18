// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Component
import ContactInformation from '../../components/Contact/contact';
import { contactPageContent } from '../../datas/pageContent/contactPageContent';

// Import Style
import { PageTitle, PageWrapper } from '../../utils/style/js/GlobalStyle';
import ContactForm from '../../components/Contact_Form/Contact_Form';

function Contact () {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(`${contactPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${contactPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>

      <PageWrapper>
        <PageTitle>{t('Contact')}</PageTitle>
        <ContactInformation/>
        <ContactForm/>
      </PageWrapper>
      </>
  );
}

export default Contact;
