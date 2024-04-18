// Import React Libraries
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// Import Context
import { useNavContext } from '../../context/NavContext';

// Import compoment
import Dropdown from '../Dropdown/Dropdown';

// Import Functions
import { scrollToTop } from '../../utils/functions/General';

// Import Json
import { navigationBarContent } from '../../datas/navBarContent';

// Import Style
import '../../utils/style/css/NavStyles.css';
import { StyledUlMenu } from '../../utils/style/js/NavStyle';
import { NavLink } from '../../utils/style/js/LinkStyles';
import { LanguageMenu } from '../LanguageMenu/languageMenu';

function NavMenu () {
  const { t, i18n } = useTranslation();
  const { burgerButtonState, setBurgerButtonState } = useNavContext();
  const location = useLocation();
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // Perform your operations here and update navItems
    const updatedNavItems = navigationBarContent.map((item, index) => {
      const pageLinkPath = `/${i18n.language}/${t(item.pageLink)}`;
      let pageLinkDropDownPath = false;
      if (item.dropDownOptionsLinks) {
        /*
        console.log("Detected dropdown");
        console.log('item.pageLink : ',item.pageLink);
        console.log('location.pathname : ',location.pathname);
        */

        const parts = location.pathname.split('/');
        const pageName = parts[parts.length - 1];
        pageLinkDropDownPath = item.dropDownOptionsLinks.includes(t(pageName, { lng: 'en' }));
        /*
        console.log('pageName : ',pageName);
        console.log('item.dropDownOptionsLinks : ',item.dropDownOptionsLinks);
        console.log('pageLinkDropDownPath : ', pageLinkDropDownPath);
        */
      }

      const isTabActive = location.pathname === pageLinkPath;
      const isHomeTabActive = location.pathname === `/${i18n.language}` && item.pageLink === '';
      const isDropDownTabActive = pageLinkDropDownPath;
      // console.log('isTabActive : ', isTabActive);
      // console.log('isHomeTabActive : ', isHomeTabActive);
      // console.log('isDropDownTabActive : ', isDropDownTabActive);

      const isActive = isTabActive || isHomeTabActive || isDropDownTabActive;
      // console.log('isActive : ', isActive);
      // console.log('\n\n');

      return {
        ...item,
        pageLinkPath,
        pageLinkDropDownPath,
        isTabActive,
        isHomeTabActive,
        isDropDownTabActive,
        isActive
      };
    });
    setNavItems(updatedNavItems);
  }, [location.pathname, i18n.language, t]);

  function handleLinkClick () {
    setBurgerButtonState(false);
    scrollToTop();
  }

  return (
    <div id='menuNav'>
      <StyledUlMenu burgerButtonState={burgerButtonState} id='menuUl'>
        {navItems.map((item, index) => {
          if (item.dropDown) {
            return (
              <li key={item.pageLinkTitle}>
                <Dropdown
                  dropDownTitle={item.pageLinkTitle}
                  options={item.dropDownOptions}
                  links={item.dropDownOptionsLinks}
                  handleCloseBurger={() => setBurgerButtonState(false)}
                  isActive={ item.isActive}
                />
              </li>
            );
          } else {
            return (
              <li key={item.pageLinkTitle} >
                <NavLink
                  to={item.pageLink ? item.pageLinkPath : `/${i18n.language}`}
                  className={item.isActive ? 'activeUnderline' : ''}
                  onClick={handleLinkClick}
                >
                  {t(item.pageLinkTitle)}
                </NavLink>
              </li>
            );
          }
        })}
        <LanguageMenu />
      </StyledUlMenu>
    </div>
  );
}

export default NavMenu;
