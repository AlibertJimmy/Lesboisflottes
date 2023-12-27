// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Styles
import styled from 'styled-components';
import { PageSubtitle } from '../../../utils/style/js/style';

// Import Constant
import { responsiveWidthMobile } from '../../../utils/constants';

const PaymentMethodContainer = styled.div`
  
    margin: 0 10px;
   
    border-radius: 15px;

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
`;

function PaymentMethod () {
  const { t } = useTranslation();

  return (
      <PaymentMethodContainer>
        <PageSubtitle>{t('PaymentMethodTitle')}</PageSubtitle>
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
