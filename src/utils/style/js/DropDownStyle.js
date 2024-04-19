// Import React Libraries
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Style
import styled from 'styled-components';
import { commonWriting } from './GlobalStyle';

// Import Colors
import colors from '../../colors/colors';
import { underlineEffect } from './NavStyle';
import { dropDownLinkHeight } from '../../constants/Global_Constants';

export const DropdownContainer = styled.div`
  
`;

export const DropDownTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDownTitle = styled.span`
  ${commonWriting};
  ${underlineEffect};
  color: ${colors.navDropDownTitle};
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  
  min-width: 200px;

  background-color: ${colors.navDropDownBackGround};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  z-index: 1;

`;

export const DropdownItem = styled.div`
  
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: ${colors.navDropDownHover};
  }
  
`;

// Icon
export const DropDownIcon = styled(FontAwesomeIcon)`
  width: 10px;
  height: 10px;
  color: ${colors.navDropDownTitle};
  margin-left: 5px;

`;

// Link
export const DropDownLink = styled(Link)`
  ${commonWriting};
  color: ${colors.navDropDownOption} ;
  text-decoration: none;
  padding-left: 5px;
  display: inline-block;

  height: ${dropDownLinkHeight}px;
  line-height: ${dropDownLinkHeight}px;
  width: 100%;
`;
