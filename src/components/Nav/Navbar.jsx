// Import React Libraries
import React from 'react';

// Import Component
import Burger from './BurgerButton';

// Import Style
import styled from 'styled-components';

// Import Constant
import { navBarHeight } from '../../utils/constants';
import colors from '../../utils/colors/colors';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  height: ${navBarHeight}px;
  background: ${colors.backgroundHeaderFooter};
`;
//
function Navbar () {
  return (
        <Nav>
            <Burger/>
        </Nav>
  );
}

export default Navbar;
