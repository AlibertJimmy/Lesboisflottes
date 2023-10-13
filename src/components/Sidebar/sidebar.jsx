import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  height: 100%;
  width: 200px;
  border-radius: 15px;
  border: 1px solid black;

`

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px; 
`

const SideBarLink = styled(Link)`
    margin-bottom: 10px;
`

function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarLinks>
                <SideBarLink to="/">Situation</SideBarLink>
                <SideBarLink to="/">Logement</SideBarLink>
                <SideBarLink to="/">Galerie</SideBarLink>
                <SideBarLink to="/">Commentaires</SideBarLink>
                <SideBarLink to="/">Tarifs</SideBarLink>
                <SideBarLink to="/">Contact</SideBarLink>
            </SidebarLinks>
        </SidebarWrapper>
    )
  }
  
  export default Sidebar