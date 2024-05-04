// Import Style
import styled from 'styled-components';

// Import Constant
import { starWidth } from '../../constants/StarScale_Constants';

export const StarSpan = styled.span`
  display: inline-block;
  width: ${starWidth * 5}px;
  margin: 0;
  padding: 0;
`;
