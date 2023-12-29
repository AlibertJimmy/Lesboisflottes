// Import React Libraries
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Import Style
import styled, { css } from 'styled-components';
import { commonTitleStyle } from './GlobalStyle';

// Import Colors
import colors from '../colors';

const CommonLink = css`
  text-decoration: none;
  color: ${colors.link};

  &:hover {
      color: ${colors.linkHover};
  }
`;

// SideNav
export const StyledLinkSidebar = styled(Link)`
  ${commonTitleStyle};
  ${CommonLink};
  font-size: 20px;    
`;

// Header
export const HeaderLink = styled(Link)`
  ${commonTitleStyle};
  ${CommonLink}
`;

// Comment
export const StyledLink = styled(Link)`
  ${CommonLink};
  width: fit-content;
  height: fit-content;
`;

export const StyledHashLink = styled(HashLink)`
  ${CommonLink};
`;
