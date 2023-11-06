// Import React Libraries
import React from 'react'

// Import Component 
import Burger from './BurgerButton'

// Import Style
import styled from 'styled-components'

const Nav = styled.nav`
    width : 100%;
    height: 50px;
    padding : 0 20px;

    display: flex;
    justify-content: center;



`

function Navbar(){

    return (
        <Nav>
            <Burger/> 
        </Nav>
    )

}

export default Navbar;