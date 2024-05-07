// Import IP Address
import { WebServerIPAddress } from '../utils/constants/IP_Contants';

export function APIContactForm (formData) {
  fetch(`http://${WebServerIPAddress}/contact`, {
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
      // Optionally, display a success message to the user
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Optionally, display an error message to the user
    });
};
