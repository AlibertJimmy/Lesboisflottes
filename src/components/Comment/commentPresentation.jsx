// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import PropTypes
import PropTypes from 'prop-types';
import { CommentListPropTypes } from '../../datas/reviewDataTypes';

// Import Components
import StarScale from './starScale';

// Import Functions
import { calculateAverageRating } from './calculateAverage';

// Import Style
import styled from 'styled-components';
import { StyledH3 } from '../../utils/style/js/style';
import { responsiveWidthMobile } from '../../utils/constants';

// Import Colors
import colors from '../../utils/style/colors';

const CommentPresentationWrapper = styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
`;

const StyledP1 = styled.p`
  font-size: 25px;
  font-family: "Bradley Hand",cursive;
  font-style: italic;

  color: ${colors.title} ;

  text-align: center;
  flex:1;
`;

const CommentPresentationContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 calc(75% - 10px);

    background: ${colors.background};
    padding: 5px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: ${responsiveWidthMobile}px){
      margin: 10px 0;
    }
`;

const CommentTextContainer = styled.div`

`;

function CommentPresentation ({ commentList, webSite }) {
  const { t } = useTranslation();

  return (

    <CommentPresentationWrapper>

            <CommentPresentationContainer>
              <a
              href={webSite === 'AirBnB'
                ? '#anchorAirBnB'
                : '#anchorBooking'}
              style={{ textDecoration: 'none', color: 'inherit' }}>
                  <StyledH3 style={{ textAlign: 'center' }}>{webSite}</StyledH3>
                  <CommentTextContainer>
                    <StyledH3 style={{ textAlign: 'center' }}>{t('AmountOfVotes')} : {commentList.reviews.length}</StyledH3>
                    <StyledP1>{t('AverageRating')} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
                  </CommentTextContainer>
                </a>
            </CommentPresentationContainer>

      </CommentPresentationWrapper>
  );
}

CommentPresentation.propTypes = {
  commentList: CommentListPropTypes.isRequired,
  webSite: PropTypes.string.isRequired
};

export default CommentPresentation;
