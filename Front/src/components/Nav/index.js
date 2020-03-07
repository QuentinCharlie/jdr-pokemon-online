// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import { getSidebarNameCapitalize } from 'src/utils/functions';
// Styles
import NavStyled from './NavStyled';

// == Import

// == Composant
const Nav = ({ visible, changeSidebarVisibility }) => {
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  return (
    <NavStyled>
      <div className="mobile-tablet">
        <div className="nav-button" onClick={handleClick} />
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="bottom"
          visible={visible}
        >
         <div className="nav-sidebar">navbar/menu ici</div>
        </Sidebar>
      </div>

      <div className="desktop">
        <a href="#" className="nav-item">Accueil</a>
        <div className="nav-items">
          <a href="#" className="nav-item">Dresseurs</a>
          <a href="#" className="nav-item">Pokemon</a>
          <a href="#" className="nav-item">Ressources</a>
          <a href="#" className="nav-item">Compte Joueur</a>
        </div>
      </div>
    </NavStyled>
  );
};

Nav.propTypes = {
  visible: PropTypes.bool.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

// == Export
export default Nav;
