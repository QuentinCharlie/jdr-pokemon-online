// == Import npm
import React from 'react';
import {
  Menu,
  Segment,
  Dropdown,
  Responsive,
} from 'semantic-ui-react'; 

// Styles
import NavStyled from './NavStyled';

// == Import

// == Composant
const Nav = () => {
  const handleItemClick = () => {
    console.log('click item');
  }

  return (
    <NavStyled />
  );
};

// == Export
export default Nav;
