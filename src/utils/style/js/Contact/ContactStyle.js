// Import Style
import styled from 'styled-components';
import { responsiveWidthTablet } from '../../../constants/Global_Constants';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  @media (max-width: ${responsiveWidthTablet}px){
    flex-direction: column;
  }
`;

export const ProfilePic = styled.img`
    max-width: 300px;
    max-height: 300px;

`;
