// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

// Import Data
import { accessPageContent } from '../../datas/pageContent/accessPageContent';
// Import Style
import { PageSubtitle, StyledP } from '../../utils/style/js/Font_Style';
import {
  AccessTransportContainer,
  AccessTransportTitleContainer,
  AccesTransportListContainer
} from '../../utils/style/js/Access_Style/Access_Style';
import IconSwitchCase from '../IconSwitchCase/IconSwitchCase';

function AccessTransport ({ transport }) {
  const { t } = useTranslation();

  return (
      <AccessTransportContainer id='accessTransportContainer'>
        <AccessTransportTitleContainer>
          <IconSwitchCase iconsName={accessPageContent.transportIconName[transport]} iconsColor={accessPageContent.transportIconColors[transport]}/>
          <PageSubtitle>{t(`By${transport}`)}</PageSubtitle>
        </AccessTransportTitleContainer>
        <AccesTransportListContainer>
        <ul>
          {accessPageContent.transportDescription[transport].map((description, index) => (
                <li key={index} style={{ listStyleType: 'none' }}><StyledP>{t(`${description}`)}</StyledP></li>
          ))}
        </ul>
        </AccesTransportListContainer>
      </AccessTransportContainer>
  );
}

AccessTransport.propTypes = {
  transport: PropTypes.string.isRequired
};

export default AccessTransport;
