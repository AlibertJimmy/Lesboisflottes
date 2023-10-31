import { useTranslation } from "react-i18next";

import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr'
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en'
import { commentListFrBooking } from '../../datas/review_Booking_fr'
import { commentListEnBooking } from '../../datas/review_Booking_en'
import CommentItem from '../../components/Comment/comment'
import AverageRatingItem from '../../components/Comment/averageRating';

import styled from 'styled-components'
import { StyledH1 } from "../../utils/style/jsx/titles&text";


const CommentsWrapper = styled.div`
  text-align: center;
`


function Comment() {

  const { i18n, t } = useTranslation();
    
    console.log(`language : ${i18n.language}`)


    var reviewsAirBnB =[]
    var reviewsBooking =[]
  if(i18n.language === 'fr'){
    reviewsAirBnB = commentListFrAirBnB.reviews
    reviewsBooking = commentListFrBooking.reviews
    console.log(`review in FRENCH`)
  }
  else if(i18n.language === 'en'){
    reviewsAirBnB = commentListEnAirBnB.reviews
    reviewsBooking = commentListEnBooking.reviews
    console.log(`review in ENGLISH`)
  }


  return (
      <CommentsWrapper>
        <StyledH1>{t("OurComments")}</StyledH1>
        <AverageRatingItem commentList={commentListFrAirBnB} webSite={'AirBnB'}/>
        <div>
          {reviewsAirBnB.map((review, index) => (
          <CommentItem key={index} comment={review} />
          ))}
        </div>
        <AverageRatingItem commentList={commentListFrBooking} webSite={'Booking'}/>
        <div>
          {reviewsBooking.map((review, index) => (
          <CommentItem key={index} comment={review} />
          ))}
        </div>
      </CommentsWrapper>
  )
}

export default Comment
