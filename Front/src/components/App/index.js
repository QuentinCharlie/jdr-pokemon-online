// == Import npm
import React from 'react';

// Styles
import AppStyled from './AppStyled';

// == Import
import Nav from 'src/components/Nav';
import Board from 'src/components/Board';
import Log from 'src/components/Log';

// == Composant
const App = () => (
  <AppStyled>
    <Nav />
    <div className="container container--board-log">
      <Board />
      <Log />
    </div>
    <div className="trainer"></div>
    <div className="pokemon"></div>
    <div className="attacks"></div>
    <div className="dices"></div>
  </AppStyled>
);

// == Export
export default App;
