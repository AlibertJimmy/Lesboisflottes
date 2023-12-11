// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { StyledH2 } from '../../../utils/style/jsx/style';

import { borderWidth, responsiveWidthMobile } from '../../../utils/style/jsx/constants';

const PaymentMethodContainer = styled.div`
  
    margin: 0 10px;
   

    border-radius: 15px;
    border: ${borderWidth}px solid black;

    width: 350px;
    height: 170px;

    @media (max-width: ${responsiveWidthMobile}px){
      
      margin:0;
      width:100%;
      text-align: center;
      
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
    border: ${borderWidth}px solid black;

`;

function PaymentMethod () {
  const { t } = useTranslation();

  return (
      <PaymentMethodContainer>
        <StyledH2>{t('PaymentMethodTitle')}</StyledH2>
          <InnerDiv>
          <ListDiv>
            <ul>
                <li>{t('PaymentMethodText3')}</li>
                <li>{t('PaymentMethodText4')}</li>
            </ul>
          </ListDiv>
        </InnerDiv>
      </PaymentMethodContainer>
  );
}

export default PaymentMethod;
