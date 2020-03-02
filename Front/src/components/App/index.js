// == Import npm
import React from 'react';

// == Import
import Nav from 'src/components/Nav';
import Board from 'src/components/Board';
import Log from 'src/components/Log';
import Trainer from 'src/components/Trainer';
import Pokemon from 'src/components/Pokemon';
import Attacks from 'src/containers/Attacks';
import Dices from 'src/containers/Dices';

// Styles
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <div className="desktop">
      <Nav />
      <div className="main-wrapper">
        <div className="container container--board-log">
          <Board />
          <Log />
        </div>
        <div className="container container--trainer-to-dices">
          <Trainer />
          <Pokemon />
          <Attacks />
          <Dices />
        </div>
      </div>
    </div>

    <div className="mobile-tablet">
      <Board />
      <div className="container container--nav-to-dices">
        <Nav />
        <Log />
        <Trainer />
        <Pokemon />
        <Attacks />
        <Dices />
      </div>
    </div>
  </AppStyled>
);

// == Export
export default App;
