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
import styled from 'styled-components';
import { StyledP } from '../../utils/style/js/style';

// Import Colors
import colors from '../../utils/style/colors';

const CommentContainer = styled.div`
    text-align: left;

    padding: 5px;
    margin: 5px 0;
    border-radius: 15px;

    background-color: ${(props) => (props.even ? colors.commentBackground2 : 'inherit')};
`;

function CommentItem ({ comment, index }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
      <div>
        <CommentContainer even={isEven}>
            <StyledP>{t('Guest')} : {comment.reviewer.firstName}</StyledP>
            <StyledP>{t('Comment')} : {removeHtmlTags(comment.comments)}</StyledP>
            <StyledP>{t('Rating')} : <StarScale scaleValue = {comment.rating}/></StyledP>
            <StyledP>{t('Date')} : {comment.localizedDate}</StyledP>
            {comment.translatedFrom !== '' && (
              <StyledP>{t('TranslatedFrom')} : {comment.translatedFrom}</StyledP>
            )}
        </CommentContainer>
      </div>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  comment: ReviewDataTypes.isRequired,
  index: PropTypes.number.isRequired
};
