// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Image
import bookingLogo from '../../assets/logo/booking_logo.svg';

// Import Style
import {
  CommentTitle
} from '../../utils/style/js/CommentStyle';
import {
  AverageRatingContainer,
  AverageRatingWebSiteNameContainer,
  AverageRatingStarScaleContainer,
  AverageRatingIconContainer,
  AverageRatingIcon,
  AverageRatingIconBrandContainer,
  AverageRatingBrandIcon,
  AverageRatingBrandImage,
  AverageRatingLink
} from '../../utils/style/js/Comment_Style/AverageRating_Style';

function AverageRatingItem ({ webSite }) {
  const { i18n, t } = useTranslation();
  console.log('webSite');
  console.log(webSite);

  return (
      <div>
        <AverageRatingLink
          to={i18n.language === 'en' ? webSite.linken : webSite.linkfr}
          target="_blank" rel="noopener noreferrer">
          <AverageRatingContainer id={`averageRatingContainer${webSite.name}`}>
            <AverageRatingWebSiteNameContainer id={`webSiteNameContainer${webSite.name}`}>
              <AverageRatingIconBrandContainer>
              {webSite.name === 'AirBnB'
                ? (
                <AverageRatingBrandIcon icon={faAirbnb} />
                  )
                : (
                <AverageRatingBrandImage src={bookingLogo} />
                  )}
              </AverageRatingIconBrandContainer>
              <CommentTitle id={`commentTitle-${webSite.name}`}>{webSite.name}</CommentTitle>
              <AverageRatingIconContainer>
                <AverageRatingIcon icon={faExternalLink}/>
              </AverageRatingIconContainer>
            </AverageRatingWebSiteNameContainer>
            <AverageRatingStarScaleContainer id={`starScaleContainer${webSite.name}`}>
              <CommentTitle>{t('AverageRating')} : <StarScale scaleValue={webSite.averageRating}/></CommentTitle>
            </AverageRatingStarScaleContainer>
          </AverageRatingContainer>
        </AverageRatingLink>
      </div>
  );
}

AverageRatingItem.propTypes = {
  webSite: PropTypes.shape({
    name: PropTypes.string.isRequired,
    linken: PropTypes.string.isRequired,
    linkfr: PropTypes.string.isRequired,
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
