import React, { useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Import Functions
import { isValidPhoneNumber, isValidEmail } from '../../utils/functions/ContactForm_Functions';

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
} from '../../utils/style/js/ContactForm_Style';

function ContactFormComponent () {
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

    const isPhoneValid = isValidPhoneNumber(formData.phone);
    const isEmailValid = isValidEmail(formData.email);

    if (!isPhoneValid) {
      console.log('Invalid Phone Number');
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        phone: 'Invalid phone number format.'
      }));
    } else {
      console.log('Valid Phone Number');
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        phone: ''
      }));
    }

    console.log('formDataErrorMessages : ', formDataErrorMessages);

    if (!isEmailValid) {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        email: 'Invalid email format.'
      }));
    } else {
      console.log('Valid Email');
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        email: ''
      }));
    }

    console.log('formDataErrorMessages : ', formDataErrorMessages);

    if (isEmailValid && isPhoneValid) {
      alert('Message Sent');
      console.log('form : ', formData);
      clearForm();
    }
  };

  return (
    <ContactFormWrapper>
      <ContactForm onSubmit={handleSubmit} id='contactForm' noValidate>
        <ContactFormFieldSet>
        <ContactFormContainer>
          <ContactFormFieldWrapper id='ContactFormFieldWrapper-Name-Phone'>
            <ContactFormFieldContainer id='ContactFormFieldContainer-Name' >
              <ContactFormField
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              </ContactFormFieldContainer>
            <ContactFormFieldContainer id='ContactFormFieldContainer-Phone' style={formDataErrorMessages.phone ? { height: '60px' } : { height: '30px' }}>
              <ContactFormField
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              {formDataErrorMessages.phone && (
                <ContactFormErrorMessageContainer className="error-message">
                  <ContactFormErrorMessage>
                    {formDataErrorMessages.phone}
                  </ContactFormErrorMessage>
                </ContactFormErrorMessageContainer>
              )}
            </ContactFormFieldContainer>
          </ContactFormFieldWrapper>

          <ContactFormFieldContainer style={formDataErrorMessages.email ? { height: '60px' } : { height: '30px' }}>
            <ContactFormFieldMail
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {formDataErrorMessages.email && (
                <ContactFormErrorMessageContainer className="error-message">
                  <ContactFormErrorMessage>
                    {formDataErrorMessages.email}
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
              Send
            </ContactFormButton>
          </ContactFormButtonContainer>

          </ContactFormContainer>
        </ContactFormFieldSet>
      </ContactForm>
    </ContactFormWrapper>
  );
}

export default ContactFormComponent;
