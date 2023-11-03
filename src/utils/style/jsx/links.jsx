import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'



export const StyledLinkHeader = styled(Link)`
  font-family: "Bradley Hand",cursive;
  font-style: italic;
  text-decoration: none;

  color: ${colors.link} ;

  &:hover {
    color: ${colors.linkHover};
  }
`
export const StyledLinkSidebar = styled(Link)`
  font-family: "Bradley Hand",cursive;
  font-style: italic;
  font-size: 20px;
  text-decoration: none;

  margin-bottom: 10px;

  color: ${colors.link} ;

  &:hover {
    color: ${colors.linkHover};
  }
`