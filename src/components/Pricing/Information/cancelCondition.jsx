// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { StyledH2, StyledP } from '../../../utils/style/jsx/style';

// Import Constants
import { borderWidth, responsiveWidthMobile } from '../../../utils/style/jsx/constants';

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    

    border-radius: 15px;
    border: ${borderWidth}px solid black;
    width: 350px;
    height: 170px;


    @media (max-width: ${responsiveWidthMobile}px){
      margin: 0;
      width:100%;
      text-align: center; 
    }
`;

function CancelCondition () {
  const { t } = useTranslation();

  return (
      <CancelConditionContainer>
        <StyledH2>{t('CancelConditionTitle')}</StyledH2>
        <StyledP>{t('CancelConditionText')}</StyledP>
      </CancelConditionContainer>
  );
}

export default CancelCondition;
