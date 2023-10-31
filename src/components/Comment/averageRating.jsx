import { useTranslation } from "react-i18next";

import StarScale from './starScale';

import styled from 'styled-components'
import { StyledH1 } from '../../utils/style/jsx/title';

const AverageRatingContainer = styled.div`
    text-align: center;

    padding: 5px;
    border-radius: 15px;
    border: 1px solid black;
`



function AverageRatingItem({commentList}) {

  const { t } = useTranslation();

  return (
      <div>
        <StyledH1>{t("OurComments")}</StyledH1>
        <AverageRatingContainer>
            <p>{t("AverageRating")} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></p>
        </AverageRatingContainer>
      </div>
  )
}

export default AverageRatingItem

function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews to calculate the average from
    }
  
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    
    // Round the average rating to, for example, 1 decimal place
    return Math.round(averageRating * 10) / 10;
  }