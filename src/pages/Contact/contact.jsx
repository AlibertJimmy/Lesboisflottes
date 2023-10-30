import styled from 'styled-components'

import ContactInformation from '../../components/Contact/contact'


const ContactWrapper = styled.div`
  text-align: center;
`


function Contact() {
  return (
      <ContactWrapper>
        <ContactInformation/>
      </ContactWrapper>
  )
}

export default Contact
