// Import React Libraries
import React from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

function StarScale ({ scaleValue }) {
  scaleValue = Math.round(scaleValue);
  const stars = Array(scaleValue).fill(null);

  return (

  <span>
    {stars.map((_, index) => (
    <span key={index.toString()}>⭐</span>
    ))}
  </span>

  );
}

StarScale.propTypes = {
  scaleValue: PropTypes.number.isRequired
};

export default StarScale;
