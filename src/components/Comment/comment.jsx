import { useTranslation } from "react-i18next";

import StarScale from './starScale';

import styled from 'styled-components'
import { StyledP } from "../../utils/style/jsx/titles&text";

import { borderWidth } from "../../utils/style/jsx/border";

const CommentContainer = styled.div`
    text-align: left;

    padding: 5px;
    border-radius: 15px;
    border: ${borderWidth}px solid black;
`




function CommentItem({comment}) {

  const { t } = useTranslation();

  console.log(`CommentItem : comment : ${comment}`)

  return (
      <div>
        <CommentContainer>
            <StyledP>{t("Guest")} : {comment.reviewer.firstName}</StyledP>
            <StyledP>{t("Comment")} : {removeHtmlTags(comment.comments)}</StyledP>
            <StyledP>{t("Rating")} : <StarScale scaleValue = {comment.rating}/></StyledP>
            <StyledP>{t("Date")} : {comment.localizedDate}</StyledP>
        </CommentContainer>
      </div>
  )
}

export default CommentItem


function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, "");
  }