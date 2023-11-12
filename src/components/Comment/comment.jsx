// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Component
import StarScale from './starScale';

// Import Style
import styled from 'styled-components'
import { StyledP } from "../../utils/style/jsx/style";

import colors from "../../utils/style/jsx/colors";
import { borderWidth } from "../../utils/style/jsx/constantes";

const CommentContainer = styled.div`
    text-align: left;

    padding: 5px;
    margin: 5px 0;
    border-radius: 15px;
    border: ${borderWidth}px solid black;

    background-color: ${(props) => (props.even ? colors.commentBackground2 : "inherit")};
`




function CommentItem({comment, index}) {

  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  //console.log(`CommentItem : comment : ${comment}`)

  return (
      <div>
        <CommentContainer even={isEven}>
            <StyledP>{t("Guest")} : {comment.reviewer.firstName}</StyledP>
            <StyledP>{t("Comment")} : {removeHtmlTags(comment.comments)}</StyledP>
            <StyledP>{t("Rating")} : <StarScale scaleValue = {comment.rating}/></StyledP>
            <StyledP>{t("Date")} : {comment.localizedDate}</StyledP>
            {comment.translatedFrom !== '' && (
              <StyledP>{t("TranslatedFrom")} : {comment.translatedFrom}</StyledP>
            )}
        </CommentContainer>
      </div>
  )
}

export default CommentItem


function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, "");
  }