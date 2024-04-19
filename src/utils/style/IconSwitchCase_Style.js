// Import React Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Styled
import styled from 'styled-components';

export const SwitchCaseIconContainer = styled.div`
  height: 45px;
  width: 45px;
`;

export const SwitchCaseIcon = styled(FontAwesomeIcon)`
  height: 45px;
  width: 45px;

  transition: transform 0.5s ease-in-out;

  &:hover {
      cursor: pointer;
      transform: scale(1.1);
  }
`;
