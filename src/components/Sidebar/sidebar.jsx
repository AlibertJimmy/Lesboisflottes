import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Comment from '../../pages/Comment/comment'

const SidebarWrapper = styled.div`
  height: 100%;
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
                <SideBarLink to="/">Accueil</SideBarLink>
                <SideBarLink to="/Situation">Situation</SideBarLink>
                <SideBarLink to="/Housing">Logement</SideBarLink>
                <SideBarLink to="/Galery">Galerie</SideBarLink>
                <SideBarLink to="/Comment">Commentaires</SideBarLink>
                <SideBarLink to="/Pricing">Tarifs</SideBarLink>
                <SideBarLink to="/Contact">Contact</SideBarLink>
            </SidebarLinks>
        </SidebarWrapper>
    )
  }
  
  export default Sidebar