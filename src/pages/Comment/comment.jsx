import styled from 'styled-components'

import { commentList } from '../../datas/review_AirBNB'
import CommentItem from '../../components/Comment/comment'
import AverageRatingItem from '../../components/Comment/averageRating';

import { useTranslation } from "react-i18next";

const CommentsWrapper = styled.div`
  text-align: center;
`


function Comment() {

  const { i18n, t } = useTranslation();
    
    console.log(`language : ${i18n.language}`)

    // Define a filter function to select reviews in the same language as the user's selection
    const filteredReviews = commentList.reviews.filter(
      (review) => review.language === i18n.language
    );


  return (
      <CommentsWrapper>
        <AverageRatingItem commentList={commentList}/>
        <div>
          {filteredReviews.map((review, index) => (
          <CommentItem key={index} comment={review} />
          ))}
        </div>
      </CommentsWrapper>
  )
}

export default Comment
