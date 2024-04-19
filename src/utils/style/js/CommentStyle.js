// Import Style
import styled from 'styled-components';
import { commonTitleStyle } from './Font_Style';

// Import Constants
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
