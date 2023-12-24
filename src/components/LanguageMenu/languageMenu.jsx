// Import React Libraries
import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

// Import Datas
import { LANGUAGES } from '../../constants/language';

// Import Style
import styled from 'styled-components';

// Import Constantes
import { responsiveWidthMobile } from '../../utils/constants';

const StyledSelect = styled.div`
  width: 100px;
  position: fixed;
  right:8px; 
  top: 10px;

  @media (max-width: ${responsiveWidthMobile}px){
    position: fixed;
    
  }
`;

export const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (selectedOption) => {
    const langCode = selectedOption.value;
    i18n.changeLanguage(langCode);
  };

  // Create an array of custom options with images
  const customOptions = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={flag} alt={label} style={{ height: '20px', width: '40px' }} /><span>{label}</span>
      </div>
    )
  }));

  const customSelectRender = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={flag} alt={label} style={{ height: '20px', width: '40px' }} />
      </div>
    )
  }));

  const selectedLang = customSelectRender.find((option) => option.value === i18n.language);

  return (
    <StyledSelect>
      <Select
        options={customOptions}

        value={selectedLang}
        onChange={onChangeLang}
      />
    </StyledSelect>
  );
};
