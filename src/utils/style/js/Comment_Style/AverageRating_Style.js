// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';

// Import Constants
import { responsiveWidthMobile, verticalMargin } from '../../../constants/Global_Constants';
import {
  averageRatingContainerVerticalPadding,
  averageRatingContainerHorizontalPadding
} from '../../../constants/Comment_Constants';

// Import Colors
import colors from '../../../colors/colors';

// Average Rating
export const AverageRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;


  padding: ${averageRatingContainerVerticalPadding}px  ${averageRatingContainerHorizontalPadding}px;
  margin-bottom: ${verticalMargin}px;

  border-radius: 15px;

  box-shadow: 0 0 10px ${colors.interactifElement};

    &:hover {
      box-shadow: 0 0 10px ${colors.interactifElementHover};
    }

  @media (max-width: ${responsiveWidthMobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AverageRatingWebSiteNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: fit-content;

  @media (max-width: ${responsiveWidthMobile}px) {
    display: flex;
    justify-content: center;
  }
`;

export const AverageRatingStarScaleContainer = styled.div`
`;

export const StyledP1 = styled.p`
  font-size: 25px;
  font-family: cursive;
  font-style: italic;

  text-align: center;

  margin: 5px;

  color: ${colors.title};

  
`;

// Icon
const AverageRatingIconDimension = css`
  height: 25px;
  width: 25px;
`;

export const AverageRatingIconContainer = styled.div`
  ${AverageRatingIconDimension};

`;

export const AverageRatingIcon = styled(FontAwesomeIcon)`
  ${AverageRatingIconDimension};
  cursor: pointer;
  color: inherit;
`;

const AverageRatingIconBrandDimension = css`
  height: 30px;
  width: 30px;
`;

export const AverageRatingIconBrandContainer = styled.div`
  ${AverageRatingIconBrandDimension};
`;

export const AverageRatingBrandIcon = styled(FontAwesomeIcon)`
  ${AverageRatingIconBrandDimension};
  cursor: pointer;
  color: #FF385C;
`;

export const AverageRatingBrandImage = styled.img`
  ${AverageRatingIconBrandDimension};
  cursor: pointer;
`;

// Links
export const AverageRatingLink = styled(Link)`
  text-decoration: none;
  color: ${colors.interactifElement};

  &:hover {
      color: ${colors.interactifElementHover};
  }
  width: fit-content;
  height: fit-content;
`;
