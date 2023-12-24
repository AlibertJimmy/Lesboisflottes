// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';
import { CommentListPropTypes } from '../../datas/reviewDataTypes';

// Import Components
import StarScale from './starScale';

// Import Functions
import { calculateAverageRating } from './calculateAverage';

// Import Style
import styled from 'styled-components';
import { StyledH3 } from '../../utils/style/js/style';

// Import Colors
import colors from '../../utils/style/colors';

// Import Constants
import {
  headerHeight, headerHeightResponsive, verticalMargin,
  responsiveWidthTablet
} from '../../utils/constants';

const AverageRatingContainer = styled.div`
  display: flex;
  flex-direction: row;

  background: ${colors.background};
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const StyledP1 = styled.p`
  font-size: 25px;
  font-family: "Bradley Hand",cursive;
  font-style: italic;
  color: ${colors.title} ;

  text-align: center;
  flex:1;
`;

const AnchorDiv = styled.div`
height: ${headerHeight + verticalMargin}px;
  
  @media (max-width: ${responsiveWidthTablet}px){
    height: ${headerHeightResponsive + verticalMargin}px;
  }
`;
function AverageRatingItem ({ commentList, webSite }) {
  const { t } = useTranslation();

  return (
    <div>
      <AnchorDiv id={webSite === 'AirBnB' ? 'anchorAirBnB' : 'anchorBooking'}></AnchorDiv>
      <div>
            <a
            href={webSite === 'AirBnB'
              ? 'https://www.airbnb.com/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&locale=en&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso'
              : 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.fr.html#tab-reviews'}
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank" rel="noopener noreferrer">
              <AverageRatingContainer>
                  <StyledH3>{webSite}</StyledH3>
                  <StyledP1>{t('AverageRating')} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
              </AverageRatingContainer>
            </a>

        </div>
    </div>
  );
}

AverageRatingItem.propTypes = {
  commentList: CommentListPropTypes.isRequired,
  webSite: PropTypes.string.isRequired
};

export default AverageRatingItem;
