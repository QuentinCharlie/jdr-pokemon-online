// == Import npm
import React from 'react';

// Styles
import AppStyled from './AppStyled';

// == Import
import Nav from 'src/components/Nav';

// == Composant
const App = () => (
  <AppStyled>
    <Nav />
    <div className="board"></div>
    <div className="log"></div>
    <div className="trainer"></div>
    <div className="pokemon"></div>
    <div className="attacks"></div>
    <div className="dices"></div>
  </AppStyled>
);

// == Export
export default App;
