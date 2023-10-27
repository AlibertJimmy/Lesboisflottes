import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLinkSidebar } from '../../utils/style/links';

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



function Sidebar() {

    const { t } = useTranslation();

    return (
        <SidebarWrapper>
            <SidebarLinks>
                <StyledLinkSidebar to="/">{t("Reception")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Location">{t("Location")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Housing">{t("Housing")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Galery">{t("Gallery")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Comment">{t("Comments")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Pricing">{t("Pricing")}</StyledLinkSidebar>
                <StyledLinkSidebar to="/Contact">{t("Contact")}</StyledLinkSidebar>
            </SidebarLinks>
        </SidebarWrapper>
    )
  }
  
  export default Sidebar