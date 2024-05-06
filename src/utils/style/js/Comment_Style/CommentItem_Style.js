// Import Styled
import styled from 'styled-components';

// Import Colors
import colors from '../../../colors/colors';

// Import Constants
import { CommonText, StyledP } from '../Font_Style';

// Comment Item
export const CommentWrapper = styled.div`
  text-align: left;

  padding: 10px;

  border-radius: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0.1, 0, 0.1, 0.2);

  background-color: ${(props) => (props.even ? colors.section : 'inherit')};
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin: 20px 10px;
`;

export const CommentAnnexDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 5px;
`;

export const StyledPCenter = styled.p`
  ${CommonText};
  ${StyledP};
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0;
`;
