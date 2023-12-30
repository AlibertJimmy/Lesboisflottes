// Import Style
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../colors';

const IconDimension = css`
  height: 25px;
  width: 25px;
`;

export const IconContainerIn = styled.div`
  ${IconDimension};
  position: absolute;
  top: 10px;
  right: 10px;
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
  &:hover{
    color: ${colors.linkHover};
  }
`;
