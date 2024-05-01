// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Component
import TopIllustration from '../../components/TopIllustration/TopIllustration';
import ContactInformation from '../../components/Contact/contactInformation';
import ContactForm from '../../components/Contact_Form/Contact_Form';

// Import Datas
import { contactPageContent } from '../../datas/pageContent/contactPageContent';

// Import Illustration
import contactTopIllustration from '../../assets/topIllustrations/ContactTopIllustration.jpg';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { ContactWrapper } from '../../utils/style/js/Contact/ContactStyle';

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
      <TopIllustration image={contactTopIllustration} title={'Contact'}/>
      <PageWrapper id='contactPageWrapper'>
        <ContactWrapper id='contactWrapper'>
          <ContactInformation/>
          <ContactForm/>
        </ContactWrapper>
      </PageWrapper>
      </>
  );
}

export default Contact;
