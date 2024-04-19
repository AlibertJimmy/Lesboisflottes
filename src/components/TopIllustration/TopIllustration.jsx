// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Import Style
import { AbsolutePositionContainer, TopIllustrationImage, TopIllustrationImageContainer, TopPageTitle } from '../../utils/style/js/TopIllustrationStyle';

// Import Styles

function TopIllustration ({ image, title }) {
  const { t } = useTranslation();
  return (
    <TopIllustrationImageContainer>
      <TopIllustrationImage src={image} />
      <AbsolutePositionContainer>
          <TopPageTitle>
            {t(title)}
          </TopPageTitle>
      </AbsolutePositionContainer>
    </TopIllustrationImageContainer>
  );
}

TopIllustration.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TopIllustration;
