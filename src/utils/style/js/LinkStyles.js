import { Link } from 'react-router-dom';

// Import Style
import styled, { css } from 'styled-components';
import { commonWriting } from './GlobalStyles';

// Import Colors
import colors from '../../colors/colors';

// Import Constants
import { horizontalMarginTablet } from '../../constants/Global_Constants';
import { underlineEffect } from './NavStyle';

// Link Related
export const NavCommonWriting = css`
  font-family: sans-serif;
  font-weight: bold;

  @media (max-width: ${horizontalMarginTablet}px){
    color: ${colors.linkResponsive};
  }
`;

const commonLink = css`
    
  text-decoration: none;

`;

export const StyledLink = styled(Link)`
    ${commonWriting};
    ${commonLink};
    color:inherit;
`;

export const NavLink = styled(Link)`
  ${commonLink};
  ${commonWriting};
  ${underlineEffect};
  color: ${colors.navLink}
`;

export const ExternalLink = styled(Link)`
  ${commonWriting};
`;

export const StyledLinkDropDown = styled(Link)`
    ${commonWriting};
    color: ${colors.linkResponsive} ;
    text-decoration: none;
`;

export const StyledLinkShape = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;
  text-decoration: none;
`;
