// Import React Libraries
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Import Style
import styled, { css } from 'styled-components';

// Import Colors
import colors from '../../colors/colors';
import { commonTitleStyle } from './Font_Style';

export const CommonLink = css`
  text-decoration: none;
  color: ${colors.interactifElement};

  &:hover {
      color: ${colors.interactifElementHover};
  }
`;

// SideNav
export const StyledLinkSidebar = styled(Link)`
  ${commonTitleStyle};
  ${CommonLink};
  font-size: 20px;    
`;

// Header

// Comment
export const StyledLink = styled(Link)`
  ${CommonLink};
  width: fit-content;
  height: fit-content;
`;

export const StyledHashLink = styled(HashLink)`
  ${CommonLink};
`;
