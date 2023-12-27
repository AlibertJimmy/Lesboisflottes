// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { PageSubtitle, StyledP } from '../../../utils/style/js/style';

// Import Constants
import { responsiveWidthMobile } from '../../../utils/constants';

const CancelConditionContainer = styled.div`

    margin: 0px 10px;
    
    border-radius: 15px;
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
        <PageSubtitle>{t('CancelConditionTitle')}</PageSubtitle>
        <StyledP>{t('CancelConditionText')}</StyledP>
      </CancelConditionContainer>
  );
}

export default CancelCondition;
