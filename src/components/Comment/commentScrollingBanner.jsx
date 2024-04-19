// Import React Libraries
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// Import Component
import CommentItem from './commentItem';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Datas
import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr';
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en';
import { commentListFrBooking } from '../../datas/review_Booking_fr';
import { commentListEnBooking } from '../../datas/review_Booking_en';

// Import Styles
import {
  CommentScrollingBannerContainer,
  CommentScrollingBannerLink
} from '../../utils/style/js/Comment_Style/CommentScrollingBanner_Style';

function CommentScrollingBanner () {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const handleOnClick = () => {
    scrollToTop();
  };

  if (reviews.length === 0) {
    return null;
  }

  return (
    <CommentScrollingBannerContainer id='commentScrollingBannerContainer'>
      <CommentScrollingBannerLink onClick={handleOnClick} to='/Comment'>
          <CommentItem comment={reviews[currentIndex]}/>
      </CommentScrollingBannerLink>
    </CommentScrollingBannerContainer>
  );
}

export default CommentScrollingBanner;
