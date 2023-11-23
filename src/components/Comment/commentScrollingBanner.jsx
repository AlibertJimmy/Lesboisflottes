// Import React Libraries
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Import Component
import CommentItem from './comment';

// Import Functions
import { scrollToTop } from '../../utils/functions/functions';

// Import Datas
import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr';
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en';
import { commentListFrBooking } from '../../datas/review_Booking_fr';
import { commentListEnBooking } from '../../datas/review_Booking_en';

// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../../utils/style/jsx/colors';
import { borderWidth } from '../../utils/style/jsx/constants';

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const reviews = useMemo(() => {
    let allReviews;

    if (i18n.language === 'fr') {
      allReviews = commentListFrAirBnB.reviews.concat(commentListFrBooking.reviews);
    } else if (i18n.language === 'en') {
      allReviews = commentListEnAirBnB.reviews.concat(commentListEnBooking.reviews);
    } else {
      allReviews = [];
    }

    // Filter short comments only when screen width is below 768px
    const shortComments = screenWidth < 768 ? allReviews.filter(comment => comment.comments.length < 150) : allReviews;

    return shortComments;
  }, [i18n.language, screenWidth]);

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
    scrollToTop();
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
