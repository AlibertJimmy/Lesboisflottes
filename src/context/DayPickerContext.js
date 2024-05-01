// Import React Libraries
import React, { createContext, useContext, useState, useEffect } from 'react';

// Import PropTypes
import PropTypes from 'prop-types';

const DayPickerContext = createContext();

export const DayPickerContextProvider = ({ children }) => {
  const [range, setRange] = useState(() => {
    // Initialize state from localStorage or set a default
    const json = localStorage.getItem('range');
    if (json !== null) {
      try {
        // Attempt to parse the stored JSON
        const savedRange = JSON.parseISO(json);
        return savedRange || undefined;
      } catch (error) {
        // Handle JSON parsing errors, if any
        console.error('Error parsing range from localStorage:', error);
        return undefined; // Return undefined or a sensible default
      }
    }
    return undefined; // Default value if nothing in localStorage
  });

  useEffect(() => {
    // Effect to update localStorage when range changes
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
