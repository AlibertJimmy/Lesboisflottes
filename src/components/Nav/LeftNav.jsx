// Import React Libraries
import React from "react";
import { useTranslation } from "react-i18next";

// Import Style
import styled from "styled-components";
import { StyledLinkSidebar } from "../../utils/style/jsx/links";

import colors from "../../utils/style/jsx/colors";

// Import constantes
import { screenWidth } from "../../utils/style/jsx/constantes";

const StyledUl = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width:90%;


    text-decoration: none;
    color: ${colors.link};


    @media (max-width: ${screenWidth}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100px;
        padding: 1rem 3rem;
        text-align: left;
        margin-top: 0;
        

        justify-content: space-evenly;
        
        

        background: #ffffff;

        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)' };
       li{
            margin-bottom: 0px;
       }
    }
`



function RightNav({open}){

    const { t } = useTranslation();

    return(
        <StyledUl open={open}>
            <li><StyledLinkSidebar to="/">{t("Reception")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Location">{t("Location")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Housing">{t("Housing")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Gallery">{t("Gallery")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Comment">{t("Comments")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Pricing">{t("Prices")}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Contact">{t("Contact")}</StyledLinkSidebar></li>
        </StyledUl>
    )
}

export default RightNav