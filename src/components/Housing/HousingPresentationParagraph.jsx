// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Import Data
// import { housingPageContent } from '../../datas/pageContent/housingPageContent';

// Import Style
import { StyledP } from '../../utils/style/js/Font_Style';

function HousingPresentationParagraph ({ paragraph, paragraphTypoStyle }) {
  // console.log('paragraph : ', paragraph);
  const { t } = useTranslation();

  return (
      <StyledP>
      {paragraph.map((text, index) => (
        paragraphTypoStyle[index] === 'bold' ? <b key={index}>{t(text)}</b> : <>{t(text)}</>
      ))}
      </StyledP>
  );
}

HousingPresentationParagraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
  paragraphTypoStyle: PropTypes.string.isRequired
};

export default HousingPresentationParagraph;
