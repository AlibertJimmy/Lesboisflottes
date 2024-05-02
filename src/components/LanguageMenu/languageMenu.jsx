// Import React Libraries
import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Import Constants
import { LANGUAGES, flagHeight, flagWidth, isLanguageCode } from '../../utils/constants/Language_Constants';

// Import Style
import { LanguageMenuContainer } from '../../utils/style/js/LanguageMenuStyle';

export const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onChangeLang = (selectedOption) => {
    const langCode = selectedOption.value;

    // Change the language
    i18n.changeLanguage(langCode);
    console.log('langCode : ', langCode);
    // Get the current pathname
    const currentPathname = window.location.pathname;

    // Get the last part of the pathname (e.g., "Achievements")
    const lastPart = currentPathname.substring(currentPathname.lastIndexOf('/') + 1);
    console.log('lastPart : ', lastPart);
    console.log('i18n.language : ', i18n.language);

    // Translate the last part using i18n
    // const translatedLastPart = i18n.t(lastPart);
    const translatedLastPart = i18n.t(lastPart, { lng: i18n.language });

    console.log('translatedLastPart : ', translatedLastPart);

    // Check if the last part is the langCode to include it in the new path or not
    let newPathname;
    if (isLanguageCode(lastPart)) {
      newPathname = `${langCode}`;
    } else {
      // Concatenate the rest of the path with the translated last part and the new language code
      newPathname = `${langCode}/${translatedLastPart}`;
    }

    console.log('newPathname : ', newPathname);
    // Navigate to the new path
    navigate(newPathname, { replace: true });
    setMenuIsOpen(false); // Close the menu after selection
  };

  const handleClick = (event) => {
    // Prevent opening and closing on the same event on desktop
    console.log('handle click');
    event.preventDefault();
    setMenuIsOpen(current => !current); // Toggle based on previous state
  };

  const handleTouchEnd = (event) => {
    console.log('handle touch');
    // Handle for mobile devices to avoid double-trigger from mouse events
    event.stopPropagation(); // Stop the click event from firing
    setMenuIsOpen(current => !current);
  };

  // Create an array of custom options with images
  const customOptions = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div key={code} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={flag} alt={label} style={{ height: `${flagHeight}px`, width: `${flagWidth}px` }} /><span style={{ color: 'black' }}>{label}</span>
      </div>
    )
  }));

  const customSelectRender = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div key={code} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={flag} alt={label} style={{ height: `${flagHeight}px`, width: `${flagWidth}px` }} />
      </div>
    )
  }));

  const selectedLang = customSelectRender.find((option) => option.value === i18n.language);

  return (
    <LanguageMenuContainer id='languageMenuContainer' onMouseDown={handleClick} onTouchEnd={handleTouchEnd}>
      <Select
        options={customOptions}

        value={selectedLang}
        onChange={onChangeLang}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        menuIsOpen={menuIsOpen}
        menuShouldBlockScroll={true}
        isSearchable={false}
      />
    </LanguageMenuContainer>
  );
};
