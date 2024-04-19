// Import Style
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../../colors/colors';

const IconDimension = css`
  height: 25px;
  width: 25px;
`;

export const IconContainerOut = styled.div`
  ${IconDimension};
  position: absolute;
  top: 10px;
  right: -45px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  ${IconDimension};
  cursor: pointer;
  color: ${colors.interactifElement};
  &:hover{
    color: ${colors.interactifElementHover};
  }
`;
