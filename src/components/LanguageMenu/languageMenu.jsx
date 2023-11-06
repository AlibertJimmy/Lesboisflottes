// Import React Libraries
import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

// Import Datas
import { LANGUAGES } from "../../constants/language";

// Import Style
import styled from "styled-components";

// Import Constantes
import { screenWidthMobile } from "../../utils/style/jsx/constantes";

const StyledSelect = styled.div`
  width: 100px;
  position: fixed;
  right:8px; 

  @media (max-width: ${screenWidthMobile}px){
    position: fixed;
    top: 10px;
  }
`

export const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (selectedOption) => {
    const lang_code = selectedOption.value;
    i18n.changeLanguage(lang_code);
  };

  // Create an array of custom options with images
  const customOptions = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <img src={flag} alt={label} style={{ height: '20px', width: '40px' }} /><span>{label}</span>
      </div>
    ),
  }));

  const customSelectRender = LANGUAGES.map(({ code, label, flag }) => ({
    value: code,
    label: (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={flag} alt={label} style={{ height: '20px', width: '40px' }} />
      </div>
    ),
  }));

  return (
    <StyledSelect>
      <Select
        options={customOptions}
        defaultValue={customSelectRender.find((option) => option.value === i18n.language)}
        onChange={onChangeLang}
      />
    </StyledSelect>
  );
};


/*
export const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <nav>

      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </nav>
  );
};
*/