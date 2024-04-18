// Import Style
import styled from 'styled-components';
import { commonTitleStyle } from './GlobalStyle';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import {
  responsiveWidthMobile, responsiveWidthTablet,
  headerHeightResponsive, titleContainerHeight,
  verticalMargin,
  titleContainerHeightResponsive
} from '../../constants';

// Comment Item Related

export const CommentWrapper = styled.div`
  text-align: left;

  padding: 10px;

  border-radius: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0.1, 0, 0.1, 0.2);

  background-color: ${(props) => (props.even ? colors.backgroundHeaderFooter : 'inherit')};
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
    justify-content: space-between;

    flex: 0 0 calc(45% - 10px);

    position: relative;

    margin: 0 auto;
    width: 100%;

    background: ${colors.background};
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: ${responsiveWidthMobile}px){
      margin: 10px 0;
    }
`;

// Average Rating Related

export const AverageRatingWrapper = styled.div`
padding-top: ${titleContainerHeight + verticalMargin}px;
  
  @media (max-width: ${responsiveWidthTablet}px){
    padding-top: ${titleContainerHeightResponsive + verticalMargin}px;
  }
  @media (max-width: ${responsiveWidthMobile}px){
    padding-top: ${headerHeightResponsive + verticalMargin}px;
  }
`;

export const CommentTitle = styled.h3`
    ${commonTitleStyle};
    font-size: 25px;
    margin: 5px;

    color: ${colors.title} ;
`;

export const AverageRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;


  padding: 5px;
  margin-bottom: ${verticalMargin}px;

  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${responsiveWidthMobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WebSiteNameContainer = styled.div`
  position: relative;
  width: fit-content;

  @media (max-width: ${responsiveWidthMobile}px) {
    display: flex;
    justify-content: center;
  }
`;

export const StarScaleContainer = styled.div`

`;

export const StyledP1 = styled.p`
  font-size: 25px;
  font-family: cursive;
  font-style: italic;

  text-align: center;

  margin: 5px;

  color: ${colors.title};

  
`;

// CommentScrolling Banner Related
export const CommentScrollingBannerContainer = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 5px rgba(0.1, 0, 0.1, 0.2);
`;
