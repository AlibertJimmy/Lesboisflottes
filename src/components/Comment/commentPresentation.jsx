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
  CommentPresentationContainer,
  CommentTitle,
  StyledHashLink,
  StyledP1
} from '../../utils/style/js/CommentStyle';

function CommentPresentation ({ commentList, webSite }) {
  const { t } = useTranslation();

  return (

    <CommentPresentationContainer id='commentPresentationContainer'>
      <StyledHashLink to={`#averageRatingWrapper${webSite}`}>
        <CommentTitle style={{ textAlign: 'center' }}>{webSite}</CommentTitle>
        <CommentTitle style={{ textAlign: 'center' }}>{t('AmountOfVotes')} : {commentList.reviews.length}</CommentTitle>
        <StyledP1>{t('AverageRating')} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
      </StyledHashLink>
    </CommentPresentationContainer>
  );
}

CommentPresentation.propTypes = {
  commentList: CommentListPropTypes.isRequired,
  webSite: PropTypes.string.isRequired
};

export default CommentPresentation;
