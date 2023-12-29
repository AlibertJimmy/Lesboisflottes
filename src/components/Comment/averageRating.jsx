// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Style
import {
  AverageRatingWrapper,
  AverageRatingContainer,
  WebSiteNameContainer, CommentTitle,
  StarScaleContainer, StyledP1
} from '../../utils/style/js/CommentStyle';
import { StyledLink } from '../../utils/style/js/LinkStyle';

function AverageRatingItem ({ webSite }) {
  const { t } = useTranslation();

  return (
    <AverageRatingWrapper id={`averageRatingWrapper${webSite.name}`}>
      <div>
        <StyledLink
          to={webSite.link}
          target="_blank" rel="noopener noreferrer">
          <AverageRatingContainer id={`averageRatingContainer${webSite.name}`}>
            <WebSiteNameContainer id={`webSiteNameContainer${webSite.name}`}>
              <CommentTitle>{webSite.name}</CommentTitle>
            </WebSiteNameContainer>
            <StarScaleContainer id={`starScaleContainer${webSite.name}`}>
              <StyledP1>{t('AverageRating')} : <StarScale scaleValue={webSite.averageRating}/></StyledP1>
            </StarScaleContainer>
          </AverageRatingContainer>
        </StyledLink>
      </div>
    </AverageRatingWrapper>
  );
}

AverageRatingItem.propTypes = {
  webSite: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    reviewList: PropTypes.arrayOf(
      PropTypes.shape({
        reviewListfr: PropTypes.array.isRequired,
        reviewListen: PropTypes.array.isRequired
      })
    ).isRequired,
    averageRating: PropTypes.number.isRequired
  })
};

export default AverageRatingItem;
