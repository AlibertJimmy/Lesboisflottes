export function isValidEmail (email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the email address against the pattern
  return emailPattern.test(email);
}

export function isValidPhoneNumber (phoneNumber) {
  // Regular expression pattern for common phone number formats
  const phonePattern = /^0[0-9]{9}$/;
  // Test the phone number against the pattern
  return phonePattern.test(phoneNumber);
}
