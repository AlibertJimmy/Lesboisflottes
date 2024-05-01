// Import Styled
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { responsiveWidthMobile, responsiveWidthTablet } from '../../constants/Global_Constants';
// Titles Related
// Common Writing
export const commonWriting = css`
  font-family: sans-serif;
  font-weight: bold;

  @media (max-width: ${responsiveWidthTablet}px){
  }
`;

export const commonTitleStyle = css`
  font-family: cursive;
  font-style: italic;
  color: ${colors.title};
`;

export const PageTitle = styled.h1`

    ${commonTitleStyle};
    font-size: 30px;

    color: ${colors.title} ;

    text-align: center;
`;

export const PageSubtitle = styled.h2`
    ${commonTitleStyle};    
    font-size: 25px;
    margin: 0;
    margin-bottom: 10px;

    color: ${colors.title} ;

    @media (max-width: ${responsiveWidthMobile}px){
        text-align:center;
    }  
`;

export const CommonText = css`
    font-size: 16px;
    font-family: cursive;
    color: ${colors.text};
`;

export const StyledP = styled.p`
    ${CommonText};
    margin: 5px 0;
`;
