// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';
import { ReviewDataTypes } from '../../datas/reviewDataTypes';

// Import Component
import StarScale from './starScale';

// Import Function
import { removeHtmlTags } from '../../utils/functions/Comment';

// Import Style
import {
  CommentWrapper,
  CommentContainer, StyledP
} from '../../utils/style/js/Comment_Style/CommentItem_Style';

function CommentItem ({ comment, index }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
        <CommentWrapper id='commentWrapper' even={isEven}>
          <CommentContainer id='commentContainerGuestRating'>
            <StyledP>{t('Guest')} : {comment.reviewer.firstName}</StyledP>
            <StyledP>{t('Rating')} : <StarScale scaleValue = {comment.rating}/></StyledP>
          </CommentContainer>
          <CommentContainer id='commentContainerComment'>
            <StyledP>{t('Comment')} : {removeHtmlTags(comment.comments)}</StyledP>
          </CommentContainer>
          <CommentContainer id='commentContainerDateTranslation'>
            <StyledP>{t('Date')} : {comment.localizedDate}</StyledP>
            {comment.translatedFrom !== '' && (
              <StyledP>{t('TranslatedFrom')} : {comment.translatedFrom}</StyledP>
            )}
          </CommentContainer>
        </CommentWrapper>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  comment: ReviewDataTypes.isRequired,
  index: PropTypes.number.isRequired
};
