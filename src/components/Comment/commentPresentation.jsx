// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Style
import {
  CommentPresentationContainer,
  CommentSitePresentationWrapper,
  CommentTitle,
  StyledP1
} from '../../utils/style/js/CommentStyle';
import { StyledHashLink } from '../../utils/style/js/LinkStyle';
import { IconContainerIn, StyledIcon } from '../../utils/style/js/IconStyle';

function CommentPresentation ({ webSitesList }) {
  const { i18n, t } = useTranslation();

  return (
    <CommentSitePresentationWrapper id='commentWebSitePresentationWrapper'>
      {webSitesList.map((webSite, index) => (
        <CommentPresentationContainer key={index} id='commentPresentationContainer'>
          <StyledHashLink to={`#averageRatingWrapper${webSite.name}`}>
            <IconContainerIn><StyledIcon icon={faArrowDown}/></IconContainerIn>
            <CommentTitle style={{ textAlign: 'center' }}>{webSite.name}</CommentTitle>
            <CommentTitle style={{ textAlign: 'center' }}>{t('AmountOfVotes')} : {webSite.reviewList[0][`reviewList${i18n.language}`].length}</CommentTitle>
            <StyledP1>{t('AverageRating')} : <StarScale scaleValue={webSite.averageRating}/></StyledP1>
          </StyledHashLink>
        </CommentPresentationContainer>
      ))}
    </CommentSitePresentationWrapper>
  );
}

CommentPresentation.propTypes = {
  webSitesList: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired
};

export default CommentPresentation;
