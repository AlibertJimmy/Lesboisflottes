import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import CommentItem from "./comment";

import { commentList } from "../../datas/review_AirBNB";

import styled from 'styled-components'

import { borderWidth } from "../../utils/style/jsx/border";



const CommentContainer = styled.div`
    text-align: left;
    width:100%;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

    



function CommentScrollingBanner() {

  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Define a filter function to select reviews in the same language as the user's selection
  const filteredReviews = commentList.reviews.filter(
    (review) => review.language === i18n.language
  );

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the current index to show the next comment
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredReviews.length);
    }, 8000); // 8 seconds

    return () => {
        clearInterval(timer); // Clear the interval on component unmount
      };
    }, [filteredReviews]);

    const redirectToComment = (comment) => {
        navigate(`/Comment`);
      };

  return (
      <div>
        <CommentContainer>
        <button
            onClick={redirectToComment}
            style={{ cursor: "pointer", border: "none", background: "none", padding: 0, textDecoration: "none" }}
        >
            <CommentItem comment={filteredReviews[currentIndex]} />
        </button>

        </CommentContainer>
      </div>
  )
}

export default CommentScrollingBanner

