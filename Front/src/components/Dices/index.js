/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import files
import pokeGif from 'src/assets/images/pikachu.gif';
import pokePng from 'src/assets/images/pikachu.png';
import ashTrainer from 'src/assets/images/sacha-face.png';
import ashTrainer2 from 'src/assets/images/sacha-droite.png';
import backArrow from 'src/assets/images/left-arrow.png';

// Styles
import DicesStyled from './DicesStyled';


// == Composant
const Dices = ({ openDiceList, isTrainerDicesActive, isPokemonDicesActive }) => {
  const handleDiceClick = (e) => {
    const diceListToOpen = e.currentTarget.className;
    openDiceList(diceListToOpen);
  };

  const cssTrainerStyle = {
    dice: true,
    'dice-trainer': true,
    active: isTrainerDicesActive,
    hidden: isPokemonDicesActive,
  };

  const cssPokemonStyle = {
    dice: true,
    'dice-pokemon': true,
    active: isPokemonDicesActive,
    hidden: isTrainerDicesActive,
  };

  const cssLuckStyle = {
    dice: true,
    'dice-luck': true,
    hidden: isTrainerDicesActive || isPokemonDicesActive,
  };

  return (
    <DicesStyled>
      <div className="dices">
        <div className={classNames(cssTrainerStyle)}>
          {isTrainerDicesActive === false && (
            <>
              <img className="avatar-dice trainer" src={ashTrainer} alt="" />
              <button className="roll-button trainer" onClick={handleDiceClick}>
                Dés Dresseur
                <span />
              </button>
            </>
          )}
          {isTrainerDicesActive && (
            <>
              <img className="avatar-dice trainer" src={ashTrainer2} alt="" />
              <button className="roll-button trainer" onClick={handleDiceClick}>
                <img className="back-arrow trainer" src={backArrow} alt="arrow back to dices" />
                <span />
              </button>
              <div className="dice-buttons">
                <div className="buttons-legend">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <div className="dice-button-list">
                  <button className="dice-button level-2">Bricolage</button>
                  <button className="dice-button level-1">Charisme</button>
                  <button className="dice-button level-3">Combat</button>
                  <button className="dice-button level-1">Conduite</button>
                  <button className="dice-button level-5">Dédection</button>
                  <button className="dice-button level-1">Discrétion</button>
                  <button className="dice-button level-0">Expression</button>
                  <button className="dice-button level-2">Psychologie</button>
                  <button className="dice-button level-4">Sport</button>
                  <button className="dice-button level-1">Survie</button>
                  <button className="dice-button level-0">Education</button>
                  <button className="dice-button level-1">Géographie</button>
                  <button className="dice-button level-1">Informatique</button>
                  <button className="dice-button level-5">Légende</button>
                  <button className="dice-button level-0">Médecine</button>
                  <button className="dice-button level-1">Médecine Pokémon</button>
                  <button className="dice-button level-0">Nature</button>
                  <button className="dice-button level-1">Psychisme</button>
                  <button className="dice-button level-3">Science</button>
                  <button className="dice-button level-0">Pokélogie</button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={classNames(cssPokemonStyle)}>
          {isPokemonDicesActive === false && (
            <>
              <img className="avatar-dice pokemon" src={pokePng} alt="" />
              <button className="roll-button pokemon" onClick={handleDiceClick}>
                Dés Pokémon
                <span />
              </button>
            </>
          )}
          {isPokemonDicesActive && (
            <>
              <img className="avatar-dice pokemon" src={pokeGif} alt="" />
              <button className="roll-button pokemon" onClick={handleDiceClick}>
                <img className="back-arrow pokemon" src={backArrow} alt="arrow back to dices" />
                <span />
              </button>
              <div className="dice-buttons">
                <div className="buttons-legend">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <div className="dice-button-list">
                  <button className="dice-button level-2">Bricolage</button>
                  <button className="dice-button level-1">Charisme</button>
                  <button className="dice-button level-3">Combat</button>
                  <button className="dice-button level-1">Conduite</button>
                  <button className="dice-button level-5">Dédection</button>
                  <button className="dice-button level-1">Discrétion</button>
                  <button className="dice-button level-0">Expression</button>
                  <button className="dice-button level-2">Psychologie</button>
                  <button className="dice-button level-4">Sport</button>
                  <button className="dice-button level-1">Survie</button>
                  <button className="dice-button level-0">Education</button>
                  <button className="dice-button level-1">Géographie</button>
                  <button className="dice-button level-1">Informatique</button>
                  <button className="dice-button level-5">Légende</button>
                  <button className="dice-button level-0">Médecine</button>
                  <button className="dice-button level-1">Médecine Pokémon</button>
                  <button className="dice-button level-0">Nature</button>
                  <button className="dice-button level-1">Psychisme</button>
                  <button className="dice-button level-3">Science</button>
                  <button className="dice-button level-0">Pokélogie</button>
                </div>
              </div>
            </>
          )}

        </div>

        <div className={classNames(cssLuckStyle)}>
          <img className="avatar-dice" src="https://img.pokemondb.net/sprites/black-white/normal/chansey.png" alt="" />
          <button className="roll-button luck" onClick={handleDiceClick}>
            Roll Chance
            <span />
          </button>
        </div>
      </div>
    </DicesStyled>
  );
};

// == Validation
Dices.propTypes = {
  openDiceList: PropTypes.func.isRequired,
  isTrainerDicesActive: PropTypes.bool.isRequired,
  isPokemonDicesActive: PropTypes.bool.isRequired,
};
// == Export
export default Dices;
