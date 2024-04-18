// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Style
import { StarSpan } from '../../utils/style/js/StarScaleStyle';
import { starHeight, starWidth } from '../../utils/constants/StarScale_Constants';

function StarScale ({ scaleValue }) {
  let fullStars = Math.floor(scaleValue);
  let fractionalPart = parseFloat((scaleValue - fullStars).toFixed(2));
  if (fractionalPart > 0.9) {
    fullStars = fullStars + 1;
    fractionalPart = 0;
  }

  return (
    <StarSpan>
      {[...Array(fullStars)].map((_, index) => (
        <svg key={index} width={starWidth} height={starHeight} xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12.25,6.5 20,7.5 15,12.5 16.25,20 10,16.5 3.75,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      ))}

      {fractionalPart > 0 && fractionalPart <= 0.1 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="2,7.5 2,9.75 0,8
          " fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.1 && fractionalPart <= 0.2 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="4,6.25 4,11.6 0,8" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.2 && fractionalPart <= 0.3 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="6,6.75 6,18.6 3.5,20 5,12.5 0,8" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.3 && fractionalPart <= 0.4 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8,5.25 8,18 3.5,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.4 && fractionalPart <= 0.5 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 10,6.25 10,7.5 10,12.5 10,16.5 3.75,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.5 && fractionalPart <= 0.6 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12,5.25 12,17.5 10,16.5 3.5,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.6 && fractionalPart <= 0.7 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12.5,6.5 14,6.75 14,18.65 10,16.5 3.5,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.7 && fractionalPart <= 0.8 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12.5,6.5 16,7.25 16,11.5 15,12.5 16,17.5 16,19.75 10,16.5 3.5,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

      {fractionalPart > 0.8 && fractionalPart <= 0.9 && (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,0 12.5,6.5 18,7.5 18,9.75 15,12.5 16.5,20 10,16.5 3.5,20 5,12.5 0,8 7.5,6.5" fill="#ffd700" />
        </svg>
      )}

    </StarSpan>
  );
}

StarScale.propTypes = {
  scaleValue: PropTypes.number.isRequired
};

export default StarScale;
