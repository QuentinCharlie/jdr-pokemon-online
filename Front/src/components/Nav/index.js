// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Dropdown
} from 'semantic-ui-react';

// == Import utils
import { getSidebarNameCapitalize } from 'src/utils/functions';
// == Import styles
import NavStyled from './NavStyled';
// == Import files
import menuIcon from 'src/assets/images/mobile-icons/menu.svg';

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
        <div className="nav-button" onClick={handleClick}>
          <img src={menuIcon} alt="menu burger icon" />
        </div>
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="bottom"
          visible={visible}
        >
          <div className="nav-sidebar">
            <a href="http://54.89.22.26/" target="_blank" className="nav-item">Accueil</a>
            <div className="nav-items">
              <Dropdown
                trigger={
                  <a href="#">Dresseurs</a>
                }
                className="nav-item"
                scrolling
              >
                <Dropdown.Menu>
                  {users.map((user) =>
                    <Dropdown.Item
                      content={user.trainer.name}
                      key={`dropdown-mobile-item-key-${user.trainer.id}`}
                      onClick={handleTrainerClick}
                    />
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <a href="http://54.89.22.26/pokemon/list" target="_blank" className="nav-item">Pokemon</a>
              <a href="http://54.89.22.26/ressources" target="_blank" className="nav-item">Ressources</a>
              {/* <a href="#" target="_blank" className="nav-item">Compte Joueur</a> */}
            </div>
          </div>
        </Sidebar>
      </div>

      <div className="desktop">
        <a href="http://54.89.22.26/" target="_blank" className="nav-item">Accueil</a>
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
                    key={`dropdown-item-key-${user.trainer.id}`}
                    onClick={handleTrainerClick}
                  />
                )}
              </Dropdown.Menu>
            </Dropdown>
          }
          <a href="http://54.89.22.26/pokemon/list" target="_blank" className="nav-item">Pokemon</a>
          <a href="http://54.89.22.26/ressources" target="_blank" className="nav-item">Ressources</a>
          {/* <a href="#" className="nav-item">Compte Joueur</a> */}
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
