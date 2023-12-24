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

const CommentWrapper = styled.div`
    text-align: left;

    padding: 10px;
    width: fit-container;

    border-radius: 15px;
    box-shadow: 2px 2px 5px 2px rgba(0.1, 0, 0.1, 0.2);

    background-color: ${(props) => (props.even ? colors.backgroundHeaderFooter : 'inherit')};
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;

function CommentItem ({ comment, index }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
        <CommentWrapper id='commentWrapper' even={isEven}>
          <CommentContainer>
            <StyledP>{t('Guest')} : {comment.reviewer.firstName}</StyledP>
            <StyledP>{t('Rating')} : <StarScale scaleValue = {comment.rating}/></StyledP>
          </CommentContainer>
          <CommentContainer>
            <StyledP>{t('Comment')} : {removeHtmlTags(comment.comments)}</StyledP>
          </CommentContainer>
          <CommentContainer>
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
