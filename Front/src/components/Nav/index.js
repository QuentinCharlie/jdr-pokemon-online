// == Import npm
import React from 'react';

// Styles
import NavStyled from './NavStyled';

// == Import

// == Composant
const Nav = () => {
  const handleItemClick = () => {
    console.log('click item');
  };

  return (
    <NavStyled>
      <a href="#" className="nav-item">Accueil</a>
      <div className="nav-items">
        <a href="#" className="nav-item">Dresseurs</a>
        <a href="#" className="nav-item">Pokemon</a>
        <a href="#" className="nav-item">Ressources</a>
        <a href="#" className="nav-item">Compte Joueur</a>
      </div>
    </NavStyled>
  );
};

// == Export
export default Nav;
