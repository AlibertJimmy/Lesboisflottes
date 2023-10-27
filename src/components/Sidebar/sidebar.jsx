import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useTranslation } from "react-i18next";



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

    const { t } = useTranslation();

    return (
        <SidebarWrapper>
            <SidebarLinks>
                <SideBarLink to="/">{t("Reception")}</SideBarLink>
                <SideBarLink to="/Location">{t("Location")}</SideBarLink>
                <SideBarLink to="/Housing">{t("Housing")}</SideBarLink>
                <SideBarLink to="/Galery">{t("Gallery")}</SideBarLink>
                <SideBarLink to="/Comment">{t("Comments")}</SideBarLink>
                <SideBarLink to="/Pricing">{t("Pricing")}</SideBarLink>
                <SideBarLink to="/Contact">{t("Contact")}</SideBarLink>
            </SidebarLinks>
        </SidebarWrapper>
    )
  }
  
  export default Sidebar