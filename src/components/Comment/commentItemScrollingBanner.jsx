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
  CommentContainer,
  StyledPCenter
} from '../../utils/style/js/Comment_Style/CommentItem_Style';
import { CommentItemScrollingBannerWrapper } from '../../utils/style/js/Comment_Style/CommentScrollingBanner_Style';
import { StyledP } from '../../utils/style/js/Font_Style';
import '../../utils/style/css/commentScrollingBannerItem.css';

function CommentItemScrollingBanner ({ comment, index }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
        <CommentItemScrollingBannerWrapper id='commentItemScrollingBannerWrapper' even={isEven}>
          <CommentContainer id='commentContainerGuestRating'>
            <StyledPCenter>{t('Guest')} : {comment.reviewer.firstName}</StyledPCenter>
            <StyledPCenter>{t('Rating')} : <StarScale scaleValue = {comment.rating}/></StyledPCenter>
          </CommentContainer>
          <CommentContainer id='commentContainerComment'>
            <p className="comment-scrolling-banner-p">{t('Comment')} : {removeHtmlTags(comment.comments)}</p>
          </CommentContainer>
          <CommentContainer id='commentContainerDateTranslation'>
            <StyledP>{t('Date')} : {comment.localizedDate}</StyledP>
            {comment.translatedFrom !== '' && (
              <StyledP>{t('TranslatedFrom')} : {comment.translatedFrom}</StyledP>
            )}
          </CommentContainer>
        </CommentItemScrollingBannerWrapper>
  );
}

export default CommentItemScrollingBanner;

CommentItemScrollingBanner.propTypes = {
  comment: ReviewDataTypes.isRequired,
  index: PropTypes.number.isRequired,
  scrollingBanner: PropTypes.bool.isRequired
};
