// Import React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {
  faWifi, faSquareParking, faEye, faVectorSquare,
  faBed, faShower, faMugHot,
  faUmbrellaBeach, faBicycle
} from '@fortawesome/free-solid-svg-icons';

// Import Style
import { SwitchCaseIconContainer, SwitchCaseIcon, SwitchCaseImage } from '../../utils/style/IconSwitchCase_Style';

// Import Image
import blanket from '../../assets/icon/blanket.png';

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
          case 'faVectorSquare':
            return <SwitchCaseIcon icon={faVectorSquare} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faBed':
            return <SwitchCaseIcon icon={faBed} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faShower':
            return <SwitchCaseIcon icon={faShower} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faMugHot':
            return <SwitchCaseIcon icon={faMugHot} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faBlanket':
            return <SwitchCaseImage src={blanket} style={{ cursor: 'default' }} />;
          case 'faBicycle':
            return <SwitchCaseIcon icon={faBicycle} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;
          case 'faUmbrellaBeach':
            return <SwitchCaseIcon icon={faUmbrellaBeach} style={{ cursor: 'default', color: `${colors[iconsColor]}` }} />;

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
