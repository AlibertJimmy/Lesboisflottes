// Import React Libraries
import React, { useState, useEffect, useRef } from 'react';

// Import Component
import RightNav from './LeftNav';

// Import Style
import styled from 'styled-components';
import colors from '../../utils/style/jsx/colors';

// Import Constante
import { responsiveWidthMobile } from '../../utils/style/jsx/constants';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;

    position: fixed;
    top: 10px;
    left: 15px;

    border: 1px solid ${colors.link};
    border-radius: 5px;
    padding: 2px;

    z-index: 20;

    display: none;

    @media (max-width: ${responsiveWidthMobile}px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        
        height: 0.25rem;
        background-color: ${colors.link};
        border-radius: 10px;
        
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({ open }) => open ? 'translate(14%) rotate(45deg)' : 'translate(0) rotate(0)'};
            
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translate(100%)' : 'translate(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'translate(14%) rotate(-45deg)' : 'translate(0) rotate(0)'};
        }


    }
`;

function Burger () {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to close the Burger component
  function handleCloseBurger () {
    setOpen(false);
  }

  return (
        <div ref={burgerRef}>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} handleCloseBurger={handleCloseBurger}/>
        </div>
  );
}

export default Burger;
