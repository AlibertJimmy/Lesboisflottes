// Import IP Address
import {
  WebServerIPAddress
  // WebServerContactPort
} from '../utils/constants/IP_Contants';

/*
export async function APIContactForm (formData) {
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
        console.log('true');
        return true; // Return true if message sent successfully
      } else {
        console.log('false');
        return false; // Return false otherwise
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return false;
    });
};
*/
export async function APIContactForm (formData) {
  try {
    const response = await fetch(`https://${WebServerIPAddress}/contact/lesboisflottes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.text();
    console.log(data); // Log server response

    if (data === 'Message sent successfully') {
      console.log('true');
      return true; // Return true if message sent successfully
    } else {
      console.log('false');
      return false; // Return false otherwise
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return false; // Return false if there was an error
  }
}
