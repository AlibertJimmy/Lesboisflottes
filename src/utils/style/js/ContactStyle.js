// Import Style
import styled from 'styled-components';

// Import Constants
import { verticalMargin } from '../../constants';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${verticalMargin}px;

  width: 100%;
  border: 1px solid red;
`;

export const ProfilePic = styled.img`
    max-width: 300px;
    max-height: 300px;

`;
