// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { StyledH2, StyledP } from '../../../utils/style/js/style';

import { responsiveWidthMobile } from '../../../utils/constants';

const HostingHoursContainer = styled.div`
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

function HostingHours () {
  const { t } = useTranslation();

  return (
      <HostingHoursContainer>
        <StyledH2>{t('HostingHoursTitle')}</StyledH2>
        <StyledP>{t('HostingHoursText')}</StyledP>
      </HostingHoursContainer>
  );
}

export default HostingHours;
