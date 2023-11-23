// Import React Libraries
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Import Component
import CommentItem from './comment';

// Import Datas
import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr';
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en';
import { commentListFrBooking } from '../../datas/review_Booking_fr';
import { commentListEnBooking } from '../../datas/review_Booking_en';

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/style/jsx/colors';
import { borderWidth } from '../../utils/style/jsx/constantes';

const CommentContainer = styled.div`
    text-align: left;
    width:100%;

    background: ${colors.background};

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`;

function CommentScrollingBanner () {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const reviews = useMemo(() => {
    if (i18n.language === 'fr') {
      return commentListFrAirBnB.reviews.concat(commentListFrBooking.reviews);
    } else if (i18n.language === 'en') {
      return commentListEnAirBnB.reviews.concat(commentListEnBooking.reviews);
    } else {
      return [];
    }
  }, [i18n.language]);

  // Add temporisatin and randomize the picked review index
  useEffect(() => {
    if (reviews.length > 0) {
      // Initialize currentIndex with a random index
      const initialIndex = Math.floor(Math.random() * reviews.length);
      setCurrentIndex(initialIndex);

      const timer = setInterval(() => {
        // Update the current index to show the next comment
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 8000); // 8 seconds

      return () => {
        clearInterval(timer); // Clear the interval on component unmount
      };
    }
  }, [reviews]);

  const redirectToComment = (comment) => {
    navigate('/Comment');
  };

  if (reviews.length === 0) {
    return null;
  }

  return (
      <div>
        <CommentContainer>
        <button
            onClick={redirectToComment}
            style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0, textDecoration: 'none' }}
        >
            <CommentItem comment={reviews[currentIndex]} />
        </button>

        </CommentContainer>
      </div>
  );
}

export default CommentScrollingBanner;
