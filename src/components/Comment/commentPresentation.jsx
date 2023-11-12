import { useTranslation } from "react-i18next";

import StarScale from './starScale';

import { calculateAverageRating } from "./calculateAverage";

import colors from "../../utils/style/jsx/colors";

import styled from 'styled-components'
import { StyledH3 } from "../../utils/style/jsx/style";
import { borderWidth } from "../../utils/style/jsx/constantes";

const CommentPresentationWrapper = styled.div`
  width:100%;
`

const StyledP1 = styled.p`
  font-size: 25px;
  font-family: "Bradley Hand",cursive;
  font-style: italic;

  color: ${colors.title} ;


  text-align: center;
  flex:1;
`

const CommentPresentationContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${colors.background};
    padding: 5px;
    border-radius: 15px;
    border: ${borderWidth}px solid black;
`

const CommentTextContainer = styled.div`

`

function CommentPresentation({commentList,webSite}) {

  const { t } = useTranslation();

  return (

    <CommentPresentationWrapper>
          <a 
          href={webSite === 'AirBnB' ? '#anchorAirBnB' 
          : '#anchorBooking'} 
          style={{textDecoration: 'none',color: 'inherit' }}>
            <CommentPresentationContainer>
                <StyledH3 style={{textAlign:'center'}}>{webSite}</StyledH3>
                <CommentTextContainer>
                  <StyledH3 style={{textAlign:'center'}}>{t("AmountOfVotes")} : {commentList.reviews.length}</StyledH3>
                  <StyledP1>{t("AverageRating")} : <StarScale scaleValue={calculateAverageRating(commentList.reviews)}/></StyledP1>
                </CommentTextContainer>
            </CommentPresentationContainer>
          </a>

        
      </CommentPresentationWrapper>
  )
}

export default CommentPresentation

