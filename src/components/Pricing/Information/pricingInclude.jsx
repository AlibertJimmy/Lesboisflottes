// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { StyledH2 } from '../../../utils/style/js/style';

import { responsiveWidthMobile } from '../../../utils/constants';

const PricingIncludeContainer = styled.div`
    margin: 0 10px;

    width: 350px;
    height: 170px;

    border-radius: 15px;

    @media (max-width: ${responsiveWidthMobile}px){
      
      margin:0;
      width:100%; 
    }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ListDiv = styled.div`
    text-align:left;
    width: 200px;
    border-radius: 15px;
`;

function PricingInclude () {
  const { t } = useTranslation();

  return (
      <PricingIncludeContainer>
        <StyledH2>{t('PricingIncludeTitle')}</StyledH2>
          <InnerDiv>
            <ListDiv>
              <ul>
                  <li>{t('PricingIncludeText1')}<br></br>{t('PricingIncludeText1bis')}</li>
                  <li>{t('PricingIncludeText2')}</li>
                  <li>{t('PricingIncludeText3')}</li>
              </ul>
            </ListDiv>
          </InnerDiv>

      </PricingIncludeContainer>
  );
}

export default PricingInclude;
