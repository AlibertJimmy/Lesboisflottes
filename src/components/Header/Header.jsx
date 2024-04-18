// Import React Libraries
import React, { useEffect, useState } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleOnClick () {
    scrollToTop();
  }

  return (
    <HeaderWrapper id='headerWrapper' isScrolled={isScrolled}>
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
