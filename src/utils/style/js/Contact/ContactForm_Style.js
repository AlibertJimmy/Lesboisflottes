// Import Styled
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Constants
import { responsiveWidthTablet } from '../../../constants/Global_Constants';
import {
  ContactFormWidth,
  ContactFormGap,
  FieldContainerHeight,
  FieldContainerNameWidth,
  FieldContainerMailWidth,
  ContactFormFieldSetPadding,
  FieldContainerMessageWidth,
  FieldContainerMessageHeight
} from '../../../constants/ContactForm_Constants';
import colors from '../../../colors/colors';

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const ContactForm = styled.form`
  width: ${ContactFormWidth}px;


`;

export const ContactFormFieldSet = styled.fieldset`
  border: none;
  margin: 0;
  padding: ${ContactFormFieldSetPadding}px;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap : ${ContactFormGap}px;
`;

export const ContactFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap : ${ContactFormGap}px;
  width: 100%;
  
  border: none;
`;

// Field Container
export const ContactFormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${FieldContainerHeight}px;

  box-sizing: border-box;
`;

export const ContactFormFieldMessageContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: ${FieldContainerMessageHeight}px;

  box-sizing: border-box;
`;

// Field Input
export const ContactFormFieldCommon = css`
  box-sizing: border-box;

  padding: 5px;
  
  height: 100%;

  font-family: cursive;
  font-size: 16px;
  color: ${colors.eerieBlack};

  border: 1px solid black;
  border-radius: 2px;

  &:focus {
    outline: 1px solid #8c8a89;
  }
`;

export const ContactFormField = styled.input`
  ${ContactFormFieldCommon};
  display: flex;
  align-items: center;

  width: ${FieldContainerNameWidth}px;
  height: 30px;

  @media (max-width: ${responsiveWidthTablet}px){
    width: 100%;
  }

`;

export const ContactFormFieldMail = styled.input`
  ${ContactFormFieldCommon};

  display: flex;
  align-items: center;
  
  width: ${FieldContainerMailWidth}px;

  @media (max-width: ${responsiveWidthTablet}px){
    width: 100%;
  }
`;

export const ContactFormFieldMessage = styled.textarea`
  ${ContactFormFieldCommon};

  display: flex;

  resize: vertical;

  margin: 0;

  width: ${FieldContainerMessageWidth}px;
  min-height: ${FieldContainerMessageHeight}px;
  

  @media (max-width: ${responsiveWidthTablet}px){
    width: 100%;
  }

`;

// Display error message
export const ContactFormErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

export const ContactFormErrorMessage = styled.span`
  padding: 5px;
  font-family: cursive;
  font-style: italic;
  font-size: 14px;
  color: red;
`;

// Button
export const ContactFormButtonContainer = styled.div`
  display: flex;

  justify-content: center;

  background-color: white;
`;

export const ContactFormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 150px;

  border-radius: 10px;

  font-family: cursive;
  font-size: 16px;

  color: ${colors.navLinks};
  background: ${colors.backgroundHeaderFooter};
  box-shadow: 0 0 10px ${colors.interactifElement};

  &:hover {
    color: ${colors.backgroundHeaderFooter};
    background: ${colors.navLinks};
    box-shadow: 0 0 10px ${colors.interactifElementHover};
  }
`;

export const ContactFormButtonIconContainer = styled.div`
  margin-right: 10px;
`;

export const ContactFormButtonIcon = styled(FontAwesomeIcon)`

`;
