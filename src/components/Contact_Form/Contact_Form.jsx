import React, { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Import Functions
import { handleFormDataErrorMessages } from '../../utils/functions/ContactForm_Functions';
import { APIContactForm } from '../../API/API_Contact_Function';

// Import Style
import {
  ContactFormWrapper,
  ContactForm,
  ContactFormFieldWrapper, ContactFormFieldContainer,
  ContactFormField,
  ContactFormFieldMessage,
  ContactFormFieldMail,
  ContactFormFieldSet,
  ContactFormContainer,
  ContactFormFieldMessageContainer,
  ContactFormButton,
  ContactFormButtonContainer,
  ContactFormErrorMessage,
  ContactFormErrorMessageContainer,
  ContactFormButtonIconContainer,
  ContactFormButtonIcon
} from '../../utils/style/js/Contact/ContactForm_Style';

function ContactFormComponent () {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formDataErrorMessages, setFormDataErrorMessages] = useState({
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    // Implement this function
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = handleFormDataErrorMessages(formDataErrorMessages, setFormDataErrorMessages, formData);

    if (isFormValid) {
      const messageSentSuccessfully = APIContactForm(formData);
      if (messageSentSuccessfully === true) {
        alert('Message Sent');
        clearForm();
      }
    }
  };

  return (
    <ContactFormWrapper>
      <ContactForm onSubmit={handleSubmit} id='contactForm' noValidate>
        <ContactFormFieldSet>
        <ContactFormContainer>
          <ContactFormFieldWrapper id='ContactFormFieldWrapper-Name-Phone'>
            <ContactFormFieldContainer id='ContactFormFieldContainer-Name' style={formDataErrorMessages.name ? { height: '60px' } : { height: '30px' }}>
              <ContactFormField
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('Name')}
                required
              />
              {formDataErrorMessages.name && (
                <ContactFormErrorMessageContainer className="error-message">
                  <ContactFormErrorMessage>
                    {t(formDataErrorMessages.name)}
                  </ContactFormErrorMessage>
                </ContactFormErrorMessageContainer>
              )}
              </ContactFormFieldContainer>
            <ContactFormFieldContainer id='ContactFormFieldContainer-Phone' style={formDataErrorMessages.phone ? { height: '60px' } : { height: '30px' }}>
              <ContactFormField
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={`${t('Phone')} ${t('Optional')}`}
                required
              />
              { /*
              formDataErrorMessages.phone && (
                <ContactFormErrorMessageContainer className="error-message">
                  <ContactFormErrorMessage>
                    {t(formDataErrorMessages.phone)}
                  </ContactFormErrorMessage>
                </ContactFormErrorMessageContainer>
              ) */ }
            </ContactFormFieldContainer>
          </ContactFormFieldWrapper>

          <ContactFormFieldContainer style={formDataErrorMessages.email ? { height: '60px' } : { height: '30px' }}>
            <ContactFormFieldMail
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('Email')}
              required
            />
            {formDataErrorMessages.email && (
                <ContactFormErrorMessageContainer className="error-message">
                  <ContactFormErrorMessage>
                    {t(formDataErrorMessages.email)}
                  </ContactFormErrorMessage>
                </ContactFormErrorMessageContainer>
            )}
          </ContactFormFieldContainer>

          <ContactFormFieldMessageContainer>
            <ContactFormFieldMessage
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </ContactFormFieldMessageContainer>

          <ContactFormButtonContainer>
            <ContactFormButton type="submit">
              <ContactFormButtonIconContainer>
                <ContactFormButtonIcon icon={faPaperPlane}/>
              </ContactFormButtonIconContainer>
              {t('Send')}
            </ContactFormButton>
          </ContactFormButtonContainer>

          </ContactFormContainer>
        </ContactFormFieldSet>
      </ContactForm>
    </ContactFormWrapper>
  );
}

export default ContactFormComponent;
