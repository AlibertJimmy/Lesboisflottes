// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';
import { CommentListPropTypes } from '../../datas/reviewDataTypes';

// Import Components
import StarScale from './starScale';

// Import Functions
import { calculateAverageRating } from '../../utils/functions/Comment';

// Import Style
import {
  AverageRatingWrapper,
  StyledLink,
  AverageRatingContainer,
  WebSiteNameContainer, CommentTitle,
  StarScaleContainer, StyledP1
} from '../../utils/style/js/CommentStyle';

function AverageRatingItem ({ commentList, webSite }) {
  const { t } = useTranslation();
  console.log(`webSite : ${webSite}`);

  return (
    <AverageRatingWrapper id={`averageRatingWrapper${webSite}`}>
      <div>
        <StyledLink
          to={webSite === 'AirBnB'
            ? 'https://www.airbnb.com/rooms/890437996290155577/reviews?_set_bev_on_new_domain=1697193598_OWU3MjQ0NWFmMzM3&locale=en&source_impression_id=p3_1698772055_msRHl3QjLZf%2Fqcso'
            : 'https://www.booking.com/hotel/fr/les-bois-flottes-plage-de-la-verne.fr.html#tab-reviews'}
          target="_blank" rel="noopener noreferrer">
          <AverageRatingContainer id={`averageRatingContainer${webSite}`}>
            <WebSiteNameContainer id={`webSiteNameContainer${webSite}`}>
              <CommentTitle>{webSite}</CommentTitle>
            </WebSiteNameContainer>
            <StarScaleContainer id={`starScaleContainer${webSite}`}>
              <StyledP1>{t('AverageRating')} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
            </StarScaleContainer>
          </AverageRatingContainer>
        </StyledLink>
      </div>
    </AverageRatingWrapper>
  );
}

AverageRatingItem.propTypes = {
  commentList: CommentListPropTypes.isRequired,
  webSite: PropTypes.string.isRequired
};

export default AverageRatingItem;
