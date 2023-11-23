// Import React Libraries
import React from 'react';

// Import PropType
import PropTypes from 'prop-types';

// Import Style
import styled from 'styled-components';

// Import Constants
import { borderWidth } from '../../../utils/style/jsx/border';

const DateWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: ${borderWidth}px solid black;
`;

function DateDisplay ({ currentDate }) {
  return (
      <DateWrapper>
        The current date is {currentDate}
      </DateWrapper>
  );
}
DateDisplay.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired
};
export default DateDisplay;
