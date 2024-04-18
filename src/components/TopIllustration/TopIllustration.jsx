// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Import Style
import { TopIllustrationImage, TopIllustrationImageContainer } from '../../utils/style/js/TopIllustrationStyle';

// Import Styles

function TopIllustration ({ image }) {
  return (
    <>
      <TopIllustrationImageContainer>
        <TopIllustrationImage src={image} />
      </TopIllustrationImageContainer>
    </>
  );
}

TopIllustration.propTypes = {
  image: PropTypes.string.isRequired
};

export default TopIllustration;
