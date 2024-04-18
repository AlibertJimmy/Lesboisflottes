// Import React Libraries
import React from 'react';

// Import Component
import Burger from './BurgerButton';

// Import Style
import { StyledNavBar } from '../../utils/style/js/NavStyle';

function Navbar () {
  return (
        <StyledNavBar id='navBar'>
            <Burger/>
        </StyledNavBar>
  );
};

export default Navbar;
