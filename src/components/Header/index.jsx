import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeLogo = styled.img`
  height: 70px;
`


function Header() {
  return (
      <div>
        <Link to="/">Les bois flottés</Link>
        <p>Plage de la Verne</p>
        <p>Chez Julie et J.Manuel</p>
      </div>
  )
}

export default Header
