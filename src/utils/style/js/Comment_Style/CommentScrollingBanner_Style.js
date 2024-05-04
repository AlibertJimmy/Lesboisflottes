// Import React Libraries
import { Link } from 'react-router-dom';

// Import Styled
import styled from 'styled-components';
import { CommonText } from '../Font_Style';

// Import Colors
import colors from '../../../colors/colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../../constants/Global_Constants';

// CommentScrolling Banner Related
export const CommentScrollingBannerContainer = styled.div`
  height: fit-content;
  width: 100%;
  height: 170px;
  border-radius: 15px;

  box-shadow: 0 0 10px ${colors.interactifElement};

  &:hover {
    box-shadow: 0 0 10px ${colors.interactifElementHover};
  }

  @media (max-width: ${responsiveWidthMobile}px){
    
    height: 200px;
  }
`;

export const CommentScrollingBannerLink = styled(Link)`
  
  text-decoration: none;  
  color: ${colors.interactifElement};

  &:hover {
      color: ${colors.interactifElementHover};
  }
  width: fit-content;
  height: 100%;
`;

export const CommentItemScrollingBannerWrapper = styled.div`
  text-align: left;
  padding: 10px;
  height: 120px;

  @media (max-width: ${responsiveWidthMobile}px){
    
    height: 150px;
  }
`;

export const CommentScrollingBannerP = styled.p`
  ${CommonText};
  margin: 5px 0px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  height: 45px;

  @media (max-width: ${responsiveWidthTablet}px){
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    
    height: 60px;
  }
`;
