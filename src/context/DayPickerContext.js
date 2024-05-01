// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

// Nav Context
const DayPickerContext = createContext();

export const DayPickerContextProvider = ({ children }) => {
  const [range, setRange] = useState();

  useEffect(() => {
    const json = localStorage.getItem('range');
    const savedRange = JSON.parse(json);
    if (savedRange) {
      setRange(savedRange);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(range);
    localStorage.setItem('range', json);
  }, [range]);

  const contextValue = {
    range,
    setRange
  };

  return <DayPickerContext.Provider value={contextValue}>{children}</DayPickerContext.Provider>;
};

DayPickerContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useDayPickerContext = () => {
  return useContext(DayPickerContext);
};
