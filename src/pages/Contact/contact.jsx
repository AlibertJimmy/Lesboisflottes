

import ContactInformation from '../../components/Contact/contact'

import styled from 'styled-components'

const ContactWrapper = styled.div`
  text-align: left;
`


function Contact() {

  return (
      <ContactWrapper>
        
        <ContactInformation/>
      </ContactWrapper>
  )
}

export default Contact
