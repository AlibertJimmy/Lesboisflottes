// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Import Components
import IconSwitchCase from '../IconSwitchCase/IconSwitchCase';

// Import Style
import { StyledP } from '../../utils/style/js/Font_Style';
import { HousingEquipementIconContainer, HousingEquipementIconWrapper, HousingEquipmentIconTextContainer } from '../../utils/style/js/Housing_Style/HousingEquipmentIcons_Style';

function HousingEquipmentIcon ({ iconsList }) {
  const { t } = useTranslation();

  return (
      <HousingEquipementIconWrapper>
        {iconsList.map((iconData) => (
          <HousingEquipementIconContainer id='HousingEquipmentListContainer-Indoor' key={iconData.icon}>
            <IconSwitchCase iconsName={iconData.icon} iconsColor={iconData.iconColor}/>
            <HousingEquipmentIconTextContainer>
              <StyledP>{t(iconData.iconText)}</StyledP>
            </HousingEquipmentIconTextContainer>
          </HousingEquipementIconContainer>
        ))}
        </HousingEquipementIconWrapper>

  );
}

HousingEquipmentIcon.propTypes = {
  iconsList: PropTypes.string.isRequired
};
export default HousingEquipmentIcon;
