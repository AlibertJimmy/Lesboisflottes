import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  text-align: center;
`


function Header() {
  return (
      <HeaderWrapper>
        <Link to="/">Les bois flottés</Link>
        <p>Plage de la Verne</p>
        <p>Chez Julie et J.Manuel</p>
      </HeaderWrapper>
  )
}

export default Header
