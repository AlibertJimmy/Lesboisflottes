// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Components
import CommentItem from '../../components/Comment/comment'
import AverageRatingItem from '../../components/Comment/averageRating';

// Import Datas
import { commentListFrAirBnB } from '../../datas/review_AirBNB_fr'
import { commentListEnAirBnB } from '../../datas/review_AirBNB_en'
import { commentListFrBooking } from '../../datas/review_Booking_fr'
import { commentListEnBooking } from '../../datas/review_Booking_en'

// Import Style
import { PageWrapper } from "../../utils/style/jsx/titles&text";
import { StyledContainer } from "../../utils/style/jsx/titles&text";
import { StyledH1 } from "../../utils/style/jsx/titles&text";




function Comment() {

  const { i18n, t } = useTranslation();
    
    //console.log(`language : ${i18n.language}`)


    var reviewsAirBnB =[]
    var reviewsBooking =[]
  if(i18n.language === 'fr'){
    reviewsAirBnB = commentListFrAirBnB.reviews
    reviewsBooking = commentListFrBooking.reviews
  }
  else if(i18n.language === 'en'){
    reviewsAirBnB = commentListEnAirBnB.reviews
    reviewsBooking = commentListEnBooking.reviews
  }


  return (
      <PageWrapper>
        <StyledContainer>
          <StyledH1>{t("OurComments")}</StyledH1>
        </StyledContainer>
        <AverageRatingItem commentList={commentListFrAirBnB} webSite={'AirBnB'}/>
        {reviewsAirBnB.map((review, index) => (
        <CommentItem key={index} comment={review} index={index}/>
        ))}
        <AverageRatingItem commentList={commentListFrBooking} webSite={'Booking'}/>
        {reviewsBooking.map((review, index) => (
        <CommentItem key={index} comment={review} index={index}/>
        ))}
      </PageWrapper>
  )
}

export default Comment
