import { useTranslation } from "react-i18next";

import { commentListFr } from '../../datas/review_AirBNB_fr'
import { commentListEn } from '../../datas/review_AirBNB_en'
import CommentItem from '../../components/Comment/comment'
import AverageRatingItem from '../../components/Comment/averageRating';

import styled from 'styled-components'



const CommentsWrapper = styled.div`
  text-align: center;
`


function Comment() {

  const { i18n } = useTranslation();
    
    console.log(`language : ${i18n.language}`)


    var reviews =[]
  if(i18n.language === 'fr'){
    reviews = commentListFr.reviews
    console.log(`review in FRENCH`)
  }
  else if(i18n.language === 'en'){
    reviews = commentListEn.reviews
    console.log(`review in ENGLISH`)
  }


  return (
      <CommentsWrapper>
        <AverageRatingItem commentList={commentListFr}/>
        <div>
          {reviews.map((review, index) => (
          <CommentItem key={index} comment={review} />
          ))}
        </div>
      </CommentsWrapper>
  )
}

export default Comment
