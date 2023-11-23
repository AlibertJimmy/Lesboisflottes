// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropType
import PropTypes from 'prop-types';

// Import Style
import styled from 'styled-components';
import { StyledLinkSidebar } from '../../utils/style/jsx/style';

import colors from '../../utils/style/jsx/colors';

// Import constantes
import { screenWidthMenu } from '../../utils/style/jsx/constantes';
const StyledUl = styled.ul`

    
    display: flex;
    gap: 2rem;

    list-style: none;
    text-decoration: none;
    color: ${colors.link};
    padding:0;


    @media (max-width: ${screenWidthMenu}px){
        flex-flow: column nowrap;

        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100px;
        padding: 1rem 3rem;
        text-align: left;
        margin-top: 0;
        gap:0;
        

        justify-content: space-evenly;
        
        

        background: #ffffff;

        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
       li{
            margin-bottom: 0px;
       }
    }
`;

function RightNav ({ open, handleCloseBurger }) {
  const { t } = useTranslation();

  function handleLinkClick () {
    handleCloseBurger(); // Call the function passed as a prop from Burger component
  }

  return (
        <StyledUl open={open}>
            <li><StyledLinkSidebar to="/" onClick={handleLinkClick}>{t('Reception')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Location" onClick={handleLinkClick}>{t('Location')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Housing" onClick={handleLinkClick}>{t('Housing')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Gallery" onClick={handleLinkClick}>{t('Gallery')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Comment" onClick={handleLinkClick}>{t('Comments')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Pricing" onClick={handleLinkClick}>{t('Prices')}</StyledLinkSidebar></li>
            <li><StyledLinkSidebar to="/Contact" onClick={handleLinkClick}>{t('Contact')}</StyledLinkSidebar></li>
        </StyledUl>
  );
}

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
};

export default RightNav;
