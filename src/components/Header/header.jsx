// Import React Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Component
import Navbar from '../Nav/Navbar';
import Logo from './Logo/Logo';

// Import Function
import { scrollToTop } from '../../utils/functions/General';
import { HeaderWrapper, LogoDiv, NavBarDiv } from '../../utils/style/js/HeaderStyle';

// Import Style

function Header () {
  const { i18n } = useTranslation();
  function handleOnClick () {
    scrollToTop();
  }

  return (
    <HeaderWrapper id='headerWrapper'>
        <LogoDiv id='logoDiv'>
          <Link to={`/${i18n.language}`} onClick={handleOnClick}><Logo/></Link>
        </LogoDiv>
        <NavBarDiv id='navBarContainer'>
          <Navbar/>
        </NavBarDiv>
    </HeaderWrapper>
  );
}

export default Header;
