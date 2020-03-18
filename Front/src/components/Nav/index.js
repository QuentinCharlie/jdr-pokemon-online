// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Dropdown
} from 'semantic-ui-react';

import { getSidebarNameCapitalize } from 'src/utils/functions';
// Styles
import NavStyled from './NavStyled';

// == Import

// == Composant
const Nav = ({
  visible,
  changeSidebarVisibility,
  users,
  isMj,
  mjChangeTrainer,
}) => {
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  const handleTrainerClick = (e) => {
    const trainerName = e.target.textContent;
    mjChangeTrainer(trainerName, users);
  }
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
         <div className="nav-sidebar">
            <a href="#" className="nav-item">Accueil</a>
            <div className="nav-items">
              <a href="#" className="nav-item">Dresseurs</a>
              <a href="#" className="nav-item">Pokemon</a>
              <a href="#" className="nav-item">Ressources</a>
              <a href="#" className="nav-item">Compte Joueur</a>
            </div>
         </div>
        </Sidebar>
      </div>

      <div className="desktop">
        <a href="#" className="nav-item">Accueil</a>
        <div className="nav-items">
          {isMj && 
            <Dropdown 
              trigger={
                <a href="#">Dresseurs</a>
              }
              className="nav-item"
            >
              <Dropdown.Menu>
                {users.map((user) =>
                  <Dropdown.Item 
                    content={user.trainer.name} 
                    key={user.trainer.id}
                    onClick={handleTrainerClick}
                  />
                )}
              </Dropdown.Menu>
            </Dropdown>
          }
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
  users: PropTypes.array.isRequired,
  isMj: PropTypes.bool.isRequired,
  mjChangeTrainer: PropTypes.func.isRequired,
};

// == Export
export default Nav;
