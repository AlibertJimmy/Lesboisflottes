// Import Style
import styled from 'styled-components';
import { commonTitleStyle } from '../Font_Style';

// Import Constants
import {
  commentGap,
  commentListWrapperMarginTop, commentListWrapperPaddingTop,
  commentListWrapperPaddingTopMobile,
  commentListWrapperPaddingTopTablet
} from '../../../constants/Comment_Constants';
import {
  responsiveWidthMobile, responsiveWidthTablet,
  verticalMarginMobile
} from '../../../constants/Global_Constants';

export const CommentTitle = styled.h3`
    ${commonTitleStyle};
    font-size: 25px;
    margin: 5px;
    color: inherit;
`;

export const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${commentGap}px;
  padding-top: ${commentListWrapperPaddingTop}px;
  margin-top: ${commentListWrapperMarginTop}px;
  
  @media (max-width: ${responsiveWidthTablet}px){
    padding-top: 20px;
    gap: ${commentListWrapperPaddingTopTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    padding-top: ${commentListWrapperPaddingTopMobile}px;
    gap: ${verticalMarginMobile}px;
  }
`;
