// Import React Libraries
import React, { useEffect, useRef } from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import Component
import NavMenu from './NavMenu';

// Import Style
import { MenuWrapper, BurgerButton } from '../../utils/style/js/NavStyle';

export const sideNavPropsType = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handleCloseBurger: PropTypes.func.isRequired
});

function Burger () {
  const { burgerButtonState, setBurgerButtonState } = useNavContext();
  const burgerRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the component
    function handleClickOutside (event) {
      /*
      console.log('burgerRef.current');
      console.log(burgerRef.current);
      console.log('!burgerRef.current.contains(event.target)');
      console.log(!burgerRef.current.contains(event.target));
      console.log('event.target');
      console.log(event.target);
      */

      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setBurgerButtonState(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <MenuWrapper ref={burgerRef} id='menuWrapper'>
        <BurgerButton burgerButtonState={burgerButtonState} onClick={() => setBurgerButtonState(!burgerButtonState)} id='burgerButton'>
            <div />
            <div />
            <div />
        </BurgerButton>
        <NavMenu />
    </MenuWrapper>
  );
}

export default Burger;
