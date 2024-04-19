// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

// Import Style
import styled, { css } from 'styled-components';
import { commonTitleStyle } from './Font_Style';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import {
  responsiveWidthMobile,
  verticalMargin
} from '../../constants/Global_Constants';
import {
  commentListWrapperMarginTop, commentListWrapperPaddingTop,
  commentPresentationBrandContainerHeight, commentPresentationBrandContainerPositionTop,
  commentPresentationContainerHeight
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

// Comment Presentation Related
export const CommentSitePresentationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 700px){
    flex-direction: column;
    margin: 0;
    gap: ${verticalMargin}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    
  }
`;

export const CommentPresentationContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex: 0 0 calc(45% - 10px);

    position: relative;

    margin: 0 auto;
    width: 100%;
    height: ${commentPresentationContainerHeight}px;

    border-radius: 15px;

    box-shadow: 0 0 10px ${colors.interactifElement};

    &:hover {
      box-shadow: 0 0 10px ${colors.interactifElementHover};
    }

    @media (max-width: ${responsiveWidthMobile}px){
      margin: 10px 0;
    }
`;

// Icon
const CommentPresentationIconDimension = css`
  height: 25px;
  width: 25px;
`;

export const CommentPresentationIconContainer = styled.div`
  ${CommentPresentationIconDimension};
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CommentPresentationIcon = styled(FontAwesomeIcon)`
  ${CommentPresentationIconDimension};
  cursor: pointer;
  color: inherit;
`;

const CommentPresentationIconBrandDimension = css`
  height: ${commentPresentationBrandContainerHeight}px;
  width: 50px;
`;

export const CommentPresentationIconBrandContainer = styled.div`
  ${CommentPresentationIconBrandDimension};
  position: absolute;
  top: ${commentPresentationBrandContainerPositionTop}px;
  left: 20px;
`;

export const CommentPresentationBrandIcon = styled(FontAwesomeIcon)`
  ${CommentPresentationIconBrandDimension};
  cursor: pointer;
  color: #FF385C;
`;

export const CommentPresentationBrandImage = styled.img`
  ${CommentPresentationIconBrandDimension};
  cursor: pointer;
`;

// Links
export const CommentPresentationHashLink = styled(HashLink)`
  text-decoration: none;
  height: 100%;
  width: 100%;
  border-radius: 10px;

  color: ${colors.interactifElement};

  &:hover {
      color: ${colors.interactifElementHover};
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
  gap: 20px;
  padding-top: ${commentListWrapperPaddingTop}px;
  margin-top: ${commentListWrapperMarginTop}px;
`;
