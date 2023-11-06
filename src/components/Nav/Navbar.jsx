// Import React Libraries
import React from 'react'

// Import Component 
import Burger from './BurgerButton'

// Import Style
import styled from 'styled-components'

const Nav = styled.nav`
    
    height: 50px;

    display: flex;
    justify-content: space-evenly;
`
//
function Navbar(){

    return (
        <Nav>
            <Burger/> 
        </Nav>
    )

}

export default Navbar;