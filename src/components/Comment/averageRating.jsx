import { useTranslation } from "react-i18next";

import StarScale from './starScale';

import colors from "../../utils/style/jsx/colors";

import styled from 'styled-components'
import { StyledH3 } from "../../utils/style/jsx/titles&text";


import { borderWidth } from "../../utils/style/jsx/border";

const AverageRatingContainer = styled.div`
    display: flex;
    flex-direction: row;

    padding: 5px;
    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const StyledP1 = styled.p`
  font-size: 25px;
  font-family: "Bradley Hand",cursive;
  font-style: italic;

  color: ${colors.title} ;


  margin-left: 30px;
  text-align: center;
  flex:1;
`

function AverageRatingItem({commentList, webSite}) {

  const { t } = useTranslation();

  return (

    <div>
          <a 
          href={webSite === 'AirBnB' ? 'https://www.airbnb.com/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&locale=en&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso' 
          : 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.fr.html#tab-reviews'} 
          style={{ textDecoration: 'none', color: 'inherit' }}
          target="_blank" rel="noopener noreferrer">
          <AverageRatingContainer>
              <StyledH3>{webSite}</StyledH3>
              <StyledP1>{t("AverageRating")} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
          </AverageRatingContainer>
        </a>

        
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