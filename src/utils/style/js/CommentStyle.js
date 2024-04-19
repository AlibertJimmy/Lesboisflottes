// Import Style
import styled from 'styled-components';
import { commonTitleStyle } from './Font_Style';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import {
  responsiveWidthMobile
} from '../../constants/Global_Constants';
import {
  commentGap,
  commentListWrapperMarginTop, commentListWrapperPaddingTop
} from '../../constants/Comment_Constants';

export const CommentTitle = styled.h3`
    ${commonTitleStyle};
    font-size: 25px;
    margin: 5px;
    color: inherit;
`;
// Comment Item Related

export const CommentWrapper = styled.div`
  text-align: left;

  padding: 10px;

  border-radius: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0.1, 0, 0.1, 0.2);

  background-color: ${(props) => (props.even ? colors.section : 'inherit')};
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;
`;

export const StyledP = styled.p`
    font-size: 15px;
    font-family: cursive;
    margin: 5px;

    @media (max-width: ${responsiveWidthMobile}px){
        
        padding-left:10px;
      }
`;

// CommentScrolling Banner Related
export const CommentScrollingBannerContainer = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${commentGap}px;
  padding-top: ${commentListWrapperPaddingTop}px;
  margin-top: ${commentListWrapperMarginTop}px;
`;
