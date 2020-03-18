// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Board from 'src/components/Board';
import Log from 'src/containers/Log';
import Trainer from 'src/containers/Trainer';
import Pokemon from 'src/containers/Pokemon';
import Attacks from 'src/containers/Attacks';
import Dices from 'src/containers/Dices';
import TrainerSelector from 'src/containers/TrainerSelector';
import PokemonSelector from 'src/containers/PokemonSelector';

// Styles
import AppStyled from './AppStyled';

// == Composant
const App = ({ isUserReady, hasTrainer, hasPokemon, isUsersNotEmpty }) => {
  return (
    <AppStyled>
    
    {!isUserReady && 
      <div className="selector">
        {!hasTrainer && <TrainerSelector />}
        {hasTrainer && !hasPokemon && <PokemonSelector />}
      </div>
    }
    {isUserReady && !isUsersNotEmpty && (
      <div>En attente d'un dresseur pour commencer l'aventure !</div>
    )}
    {isUserReady && isUsersNotEmpty && (
      <>
        <div className="mobile-tablet-app">
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

        <div className="desktop-app">
          <Nav />
          <div className="main-wrapper">
            <div className="container container--board-log">
              <Board />
              <Log />
            </div>
            <div className="container container--trainer-to-dices">
              <div className="bottom-left-wrapper">
                <Trainer />
                <div className="sub-left-wrapper">
                  <Pokemon />
                  <Attacks />
                </div>
              </div>
              <Dices />
            </div>
          </div>
        </div>
      </>

    )}
    </AppStyled>
  );
}

// == validation
App.propTypes = {
  hasTrainer: PropTypes.bool.isRequired,
  hasPokemon: PropTypes.bool.isRequired,
  isUserReady: PropTypes.bool.isRequired,
  isUsersNotEmpty: PropTypes.bool.isRequired,
};

// == Export
export default App;
