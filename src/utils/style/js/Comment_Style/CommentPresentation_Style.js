// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

// Import Styled
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../../../colors/colors';

// Import Constants
import {
  responsiveWidthMobile,
  responsiveWidthTablet,
  verticalMargin
} from '../../../constants/Global_Constants';
import {
  CommentPresentationWrapperGapTablet,
  commentListWrapperPaddingTopMobile,
  commentPresentationBrandContainerHeight,
  commentPresentationBrandContainerPositionTop,
  commentPresentationContainerHeight
} from '../../../constants/Comment_Constants';

// Comment Presentation Related
export const CommentSitePresentationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 700px){
    flex-direction: column;
    margin: 0;
    gap: ${verticalMargin}px;
  }

  @media (max-width: ${responsiveWidthTablet}px){
    gap: ${CommentPresentationWrapperGapTablet}px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
    gap: ${commentListWrapperPaddingTopMobile}px;
  }
`;

export const CommentPresentationContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex: 0 0 calc(45%);

    position: relative;

    margin: 0;
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

  @media (max-width: ${responsiveWidthTablet}px){
    height: 30px;
    width: 30px;
  }

  @media (max-width: ${responsiveWidthMobile}px){
  }
`;

export const CommentPresentationIconBrandContainer = styled.div`
  ${CommentPresentationIconBrandDimension};
  position: absolute;
  top: ${commentPresentationBrandContainerPositionTop}px;
  left: 20px;

  @media (max-width: ${responsiveWidthTablet}px){
    top: 5px;
  }
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
