// == Import npm
import React from 'react';
import {
  Menu,
  Segment,
  Dropdown,
  Responsive,
} from 'semantic-ui-react'; 

// Styles
// import NavStyled from './NavStyled';

// == Import

// == Composant
const Nav = () => {
  const handleItemClick = () => {
    console.log('click item');
  }

  return (
    <>
      <Responsive inverted as={Segment} maxWidth={499}>
        <Dropdown
            id="burger-menu-icon"
            icon={{
              name: 'bars',
              size: 'big',
            }}
            basic
            className="icon"
          >
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={handleItemClick}
            >
              Accueil
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleItemClick}
            >
              Dresseurs
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleItemClick}
            >
              Pokémon
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleItemClick}
            >
              Ressources
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleItemClick}
            >
              Joueurs
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Responsive>

      <Responsive inverted as={Segment} minWidth={500}>
        <Menu inverted secondary>
          <Menu.Item
            name="Accueil"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Dresseurs"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Pokemon"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Ressources"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Joueur"
            onClick={handleItemClick}
          />
        </Menu>
      </Responsive>
    </>
  );
};

// == Export
export default Nav;
