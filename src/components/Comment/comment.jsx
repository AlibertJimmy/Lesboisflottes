
import styled from 'styled-components'

import { useTranslation } from "react-i18next";

import StarScale from './starScale';


const CommentContainer = styled.div`
    text-align: left;

    padding: 5px;
    border-radius: 15px;
    border: 1px solid black;
`

const StyledParagraph = styled.p`
    margin: 5px;
`




function CommentItem({comment}) {

  const { t } = useTranslation();

  return (
      <div>
        <CommentContainer>
            <StyledParagraph>{t("Guest")} : {comment.reviewer.firstName}</StyledParagraph>
            <StyledParagraph>{t("Comment")} : {removeHtmlTags(comment.comments)}</StyledParagraph>
            <StyledParagraph>{t("Rating")} : <StarScale scaleValue = {comment.rating}/></StyledParagraph>
            <StyledParagraph>{t("Date")} : {comment.localizedDate}</StyledParagraph>
        </CommentContainer>
      </div>
  )
}

export default CommentItem


function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, "");
  }