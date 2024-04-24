// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Import Components
import IconSwitchCase from '../IconSwitchCase/IconSwitchCase';

// Import Style
import { StyledP } from '../../utils/style/js/Font_Style';
import {
  HousingEquipementIconWrapper,
  HousingEquipementIconTextWrapper,
  HousingEquipementIconContainer,
  HousingEquipmentIconTextContainer
} from '../../utils/style/js/Housing_Style/HousingEquipmentIcons_Style';

function HousingEquipmentIcon ({ iconsList }) {
  const { t } = useTranslation();

  return (
      <HousingEquipementIconWrapper>
        {iconsList.map((iconData) => (
          <HousingEquipementIconTextWrapper id='HousingEquipmentListContainer-Indoor' key={iconData.icon}>
            <HousingEquipementIconContainer>
              <IconSwitchCase iconsName={iconData.icon} iconsColor={iconData.iconColor}/>
            </HousingEquipementIconContainer>
            <HousingEquipmentIconTextContainer>
              <StyledP>{t(iconData.iconText)}</StyledP>
            </HousingEquipmentIconTextContainer>
          </HousingEquipementIconTextWrapper>
        ))}
        </HousingEquipementIconWrapper>

  );
}

HousingEquipmentIcon.propTypes = {
  iconsList: PropTypes.string.isRequired
};
export default HousingEquipmentIcon;
