export function isValidEmail (email) {
  console.log(`email : ${email}`);
  if (email === '') {
    console.log('missing email');
    return ('missing');
  } else {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the email address against the pattern
    return emailPattern.test(email);
  }
}

export function isValidPhoneNumber (phoneNumber) {
  console.log(`email : ${phoneNumber}`);
  if (phoneNumber === '') {
    console.log('missing email');
    return ('missing');
  } else {
    const phonePattern = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$|^(\+|00)[1-9]\d{1,14}$/;
    return phonePattern.test(phoneNumber);
  }
}

export function isValidName (name) {
  console.log(`name : ${name}`);
  if (name === '') {
    console.log('missing name');
    return ('missing');
  } else {
    const namePattern = /^[a-zA-Z]+(?:[-\s]?[a-zA-Z]+)*$/;
    return namePattern.test(name);
  }
}

export function handleFormDataErrorMessages (formDataErrorMessages, setFormDataErrorMessages, formData) {
  const isPhoneValid = isValidPhoneNumber(formData.phone);
  const isEmailValid = isValidEmail(formData.email);
  const isNameValid = isValidName(formData.name);

  if (isPhoneValid === true) {
    console.log('Valid phone');
    setFormDataErrorMessages(prevState => ({
      ...prevState,
      phone: ''
    }));
  } else {
    if (isPhoneValid === 'missing') {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        phone: 'PhoneMissing'
      }));
    } else if (isPhoneValid === false) {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        phone: 'PhoneFormat'
      }));
    }
  }

  if (isEmailValid === true) {
    console.log('Valid Email');
    setFormDataErrorMessages(prevState => ({
      ...prevState,
      email: ''
    }));
  } else {
    if (isEmailValid === 'missing') {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        email: 'EmailMissing'
      }));
    } else if (isEmailValid === false) {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        email: 'EmailFormat'
      }));
    }
  }

  if (isNameValid === true) {
    console.log('Valid name');
    setFormDataErrorMessages(prevState => ({
      ...prevState,
      name: ''
    }));
  } else {
    if (isNameValid === 'missing') {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        name: 'NameMissing'
      }));
    } else if (isNameValid === false) {
      setFormDataErrorMessages(prevState => ({
        ...prevState,
        name: 'NameFormat'
      }));
    }
  }

  console.log('formDataErrorMessages : ', formDataErrorMessages);

  if (isEmailValid === true && isPhoneValid === true && isNameValid === true) {
    return true;
  } else {
    return false;
  }
}
