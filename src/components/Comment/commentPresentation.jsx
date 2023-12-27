// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';

// Import Components
import StarScale from './starScale';

// Import Style
import {
  CommentPresentationContainer,
  CommentSitePresentationWrapper,
  CommentTitle,
  StyledHashLink,
  StyledP1
} from '../../utils/style/js/CommentStyle';

function CommentPresentation ({ webSitesList }) {
  const { i18n, t } = useTranslation();

  return (
    <CommentSitePresentationWrapper id='commentWebSitePresentationWrapper'>
      {webSitesList.map((webSite, index) => (
        <CommentPresentationContainer key={index} id='commentPresentationContainer'>
          <StyledHashLink to={`#averageRatingWrapper${webSite.name}`}>
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
