import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
`

const StyledTitle = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 5px;
`

const StyledSubtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  margin: 5px;
`

function Header() {
  return (
      <HeaderWrapper>
        <Link to="/">
          <StyledTitle>Les bois flottés</StyledTitle>
          <StyledSubtitle>Plage de la Verne</StyledSubtitle>
          <StyledSubtitle>Chez Julie et J.Manuel</StyledSubtitle>
        </Link>
      </HeaderWrapper>
  )
}

export default Header
