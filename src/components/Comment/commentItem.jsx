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
  CommentContainer,
  StyledPCenter,
  CommentAnnexDataContainer
} from '../../utils/style/js/Comment_Style/CommentItem_Style';
import { CommentScrollingBannerP } from '../../utils/style/js/Comment_Style/CommentScrollingBanner_Style';
import { StyledP } from '../../utils/style/js/Font_Style';

function CommentItem ({ comment, index, scrollingBanner }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
        <CommentWrapper id='commentWrapper' even={isEven}>
          <CommentAnnexDataContainer id='commentContainerGuestRating'>
            <StyledP>{t('Guest')} : {comment.reviewer.firstName}</StyledP>
            <StyledPCenter>{t('Rating')} : <StarScale scaleValue = {comment.rating}/></StyledPCenter>
          </CommentAnnexDataContainer>
          <CommentContainer id='commentContainerComment'>
            { scrollingBanner
              ? <CommentScrollingBannerP>{t('Comment')} : {removeHtmlTags(comment.comments)}</CommentScrollingBannerP>
              : <StyledP>{t('Comment')} : {removeHtmlTags(comment.comments)}</StyledP>
            }

          </CommentContainer>
          <CommentAnnexDataContainer id='commentContainerDateTranslation'>
            <StyledP>{t('Date')} : {comment.localizedDate}</StyledP>
            {comment.translatedFrom !== '' && (
              <StyledP>{t('TranslatedFrom')} : {comment.translatedFrom}</StyledP>
            )}
          </CommentAnnexDataContainer>
        </CommentWrapper>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  comment: ReviewDataTypes.isRequired,
  index: PropTypes.number.isRequired,
  scrollingBanner: PropTypes.bool.isRequired
};
