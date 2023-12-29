// import React Libraries
import { useEffect, useState } from 'react';

// Import Constantes
import { responsiveWidthTablet } from '../style/jsx/constants';

export function shouldRenderSubtitles () {
  const screenWidth = window.innerWidth;
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return screenWidth < responsiveWidthTablet || scrollPosition < scrollThreshold;
}
