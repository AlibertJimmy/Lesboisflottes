// Import React Libraries
import { Link } from 'react-router-dom';

// Import Styled
import styled from 'styled-components';

// Import Colors
import colors from '../../../colors/colors';

// CommentScrolling Banner Related
export const CommentScrollingBannerContainer = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 15px;

  box-shadow: 0 0 10px ${colors.interactifElement};

  &:hover {
    box-shadow: 0 0 10px ${colors.interactifElementHover};
  }
`;

export const CommentScrollingBannerLink = styled(Link)`
  text-decoration: none;
  color: ${colors.interactifElement};

  &:hover {
      color: ${colors.interactifElementHover};
  }
  width: fit-content;
  height: fit-content;
`;
