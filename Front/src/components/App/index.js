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
import pokeball from 'src/assets/images/pokeball-bounce.gif';
import book from 'src/assets/images/book.png';
import dice from 'src/assets/images/dice.png';
import calculator from 'src/assets/images/calculator.png';


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
        <div className="mjLoading">
          <div className="announce">En attente d'un dresseur pour commencer l'aventure !</div>
          <div className="spinner">
            <img src={pokeball} alt="" className="pokeball bouncing" />
          </div>
          <div className="docs">
            <div className="doc">
              <div className="doc-title">Livre d'Univers</div>
              <div className="doc-description">Ce livre vous permettra de vous plonger dans l'univers Pokémon afin de créer le sénario qui guidera les dresseurs tout au long de la partie.</div>
              <div className="doc-link">
                <a href="http://54.89.22.26/assets/ressources/Livre%20d'univers%20(v5.5).pdf" target="_blank" className="link"> En savoir plus.</a>
              </div>
              <img src={book} alt="rule book" />
            </div>
            <div className="doc">
              <div className="doc-title">Livre des Règles</div>
              <div className="doc-description">Ce livre vous permettra de connaitre les règles liées à l'univers JDR Pokémon, notamment les attaques, les lancés des dés et les calculs associés.</div>
              <div className="doc-link">
                <a href="http://54.89.22.26/assets/ressources/Livre_de_regles_v5.5.pdf" target="_blank" className="link"> En savoir plus.</a>
              </div>
              <img src={dice} alt="rule book" />
            </div>
            <div className="doc">
              <div className="doc-title">Le tableaux de marges</div>
              <div className="doc-description">Cette documentation vous permettra de prendre connaissance des marges dans la réalisation des actions des dresseurs.</div>
              <div className="doc-link">
                <a href="http://54.89.22.26/assets/ressources/Marge.png" target="_blank" className="link"> En savoir plus.</a>
              </div>
              <img src={calculator} alt="rule book" />
            </div>
          </div>
        </div>
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
