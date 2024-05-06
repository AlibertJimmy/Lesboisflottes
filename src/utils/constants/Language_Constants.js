// Langage
import flagFr from '../../assets/flag/flag_fr.png';
import flagEn from '../../assets/flag/flag_en.png';

export const LANGUAGES = [
  {
    label: 'FR',
    code: 'fr',
    flag: flagFr
  },
  {
    label: 'EN',
    code: 'en',
    flag: flagEn
  }
];

export const webSiteDevUrl = 'http://localhost:3000';
export const webSiteProdUrl = 'https://lesboisflottes.fr';

// Function to detect if it's a langage code
export const isLanguageCode = (codeToCheck) => {
  return LANGUAGES.some((language) => language.code === codeToCheck);
};

// Language Selector
export const languageMenuContainerWidth = 100;
export const languageMenuContainerHeight = 38;

export const flagHeight = 20;
export const flagWidth = 40;
