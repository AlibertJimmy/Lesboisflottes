import { useTranslation } from "react-i18next";

import StarScale from './starScale';

import { calculateAverageRating } from "./calculateAverage";

import colors from "../../utils/style/jsx/colors";

import styled from 'styled-components'
import { StyledH3 } from "../../utils/style/jsx/style";

import { borderWidth, headerMargin } from "../../utils/style/jsx/constantes";

const AverageRatingContainer = styled.div`
    display: flex;
    flex-direction: row;

    background: ${colors.background};
    padding: 5px;
    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const StyledP1 = styled.p`
  font-size: 25px;
  font-family: "Bradley Hand",cursive;
  font-style: italic;
  color: ${colors.title} ;

  text-align: center;
  flex:1;
`
function AverageRatingItem({commentList, webSite}) {

  const { t } = useTranslation();

  return (
    <div>
      <div id={webSite === 'AirBnB' ? 'anchorAirBnB' : 'anchorBooking'} style={{ height: headerMargin+25+ 'px' }}></div>
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
    </div>
  )
}

export default AverageRatingItem

