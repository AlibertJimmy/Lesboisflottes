// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Style
import {
  AverageRatingContainer,
  WebSiteNameContainer, CommentTitle,
  StarScaleContainer
} from '../../utils/style/js/CommentStyle';
import { StyledLink } from '../../utils/style/js/LinkStyle';
import { IconContainerOut, StyledIcon } from '../../utils/style/js/IconStyle';

function AverageRatingItem ({ webSite }) {
  const { i18n, t } = useTranslation();
  console.log('webSite');
  console.log(webSite);

  return (
      <div>
        <StyledLink
          to={i18n.language === 'en' ? webSite.linken : webSite.linkfr}
          target="_blank" rel="noopener noreferrer">
          <AverageRatingContainer id={`averageRatingContainer${webSite.name}`}>
            <WebSiteNameContainer id={`webSiteNameContainer${webSite.name}`}>
              <IconContainerOut><StyledIcon icon={faExternalLink}/></IconContainerOut>
              <CommentTitle id={`commentTitle-${webSite.name}`}>{webSite.name}</CommentTitle>
            </WebSiteNameContainer>
            <StarScaleContainer id={`starScaleContainer${webSite.name}`}>
              <CommentTitle>{t('AverageRating')} : <StarScale scaleValue={webSite.averageRating}/></CommentTitle>
            </StarScaleContainer>
          </AverageRatingContainer>
        </StyledLink>
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
