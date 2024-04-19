// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { faWifi, faSquareParking, faEye } from '@fortawesome/free-solid-svg-icons';

// Import Style
import { SwitchCaseIconContainer, SwitchCaseIcon } from '../../utils/style/IconSwitchCase_Style';

// Import Colors
import colors from '../../utils/colors/colors';

function IconSwitchCase ({ iconsName, iconsColor }) {
  console.log('iconsName : ', iconsName);
  console.log('iconColor : ', iconsColor);

  return (
    <SwitchCaseIconContainer>
      {(() => {
        switch (iconsName) {
          case 'faWifi':
            return <SwitchCaseIcon icon={faWifi} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faEye':
            return <SwitchCaseIcon icon={faEye} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faSquareParking':
            return <SwitchCaseIcon icon={faSquareParking} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          default:
            return null;
        }
      })()}
    </SwitchCaseIconContainer>
  );
}

IconSwitchCase.propTypes = {
  iconsName: PropTypes.string.isRequired,
  iconsColor: PropTypes.string.isRequired
};

export default IconSwitchCase;
