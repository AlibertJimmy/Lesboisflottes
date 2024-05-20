// Import IP Address
import {
  WebServerIPAddress
  // WebServerContactPort
} from '../utils/constants/IP_Contants';

export function APIContactForm (formData) {
  // fetch(`https://${WebServerIPAddress}:${WebServerContactPort}/contact/lesboisflottes`, {
  fetch(`https://${WebServerIPAddress}/contact/lesboisflottes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log(data); // Log server response
      if (data === 'Message sent successfully') {
        return true; // Return true if message sent successfully
      } else {
        return false; // Return false otherwise
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return false;
    });
};
