// Import React Libraries
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Function
import { scrollToTop } from '../../utils/functions/General';

// Import Style
import {
  DropdownContainer,
  DropDownTitleContainer, DropDownTitle, DropDownIcon,
  DropdownContent, DropdownItem, DropDownLink
} from '../../utils/style/js/DropDownStyle';

function Dropdown ({ dropDownTitle, options, links, handleCloseBurger, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleOptionClick = (option) => {
    setIsOpen(false);
    scrollToTop();
    handleCloseBurger();
    // console.log('handleClick : option : ',option);
  };

  return (
    <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id={`dropDown${dropDownTitle}`} >
      <DropDownTitleContainer >
        <DropDownTitle className={isActive ? 'activeUnderline' : ''}>{t(dropDownTitle)}</DropDownTitle><DropDownIcon icon={faChevronDown}/>
      </DropDownTitleContainer>
      <DropdownContent id={`dropDownContent${dropDownTitle}`} open={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={`dropDownContent${options[index]}`} >
            <DropDownLink to={`/${i18n.language}/${t(links[index])}`} onClick={() => handleOptionClick(links[index])} >{t(option)}</DropDownLink>
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  dropDownTitle: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCloseBurger: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Dropdown;
