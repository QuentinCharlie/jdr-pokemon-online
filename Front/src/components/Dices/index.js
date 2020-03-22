/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Segment,
  Sidebar,
} from 'semantic-ui-react';

// == import utils
import { getSidebarNameCapitalize } from 'src/utils/functions';
import { findTrainerImage, findPokemonImage } from 'src/utils/functions';

// == Import files
import ashTrainer from 'src/assets/images/sacha-face.png';
import ashTrainer2 from 'src/assets/images/sacha-droite.png';
import backArrow from 'src/assets/images/left-arrow.png';
import diceIcon from 'src/assets/images/mobile-icons/dice-icon.png';

// Styles
import DicesStyled from './DicesStyled';

// == Composant
const Dices = ({
  openDiceList,
  isTrainerDicesActive,
  isPokemonDicesActive,
  visible,
  trainer,
  pokemon,
  changeSidebarVisibility,
  addDiceRollsToLog,
}) => {
  const handleDiceClick = (e) => {
    const diceListToOpen = e.currentTarget.className;
    openDiceList(diceListToOpen);
  };

  const handleSidebarButtonClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };

  const handleTrainerDiceClick = (e) => {
    let skillLevel = e.target.className.replace('dice-button level-', '');
    const skill = e.target.textContent;
    let diceRolls = [];
    if (skillLevel === 'null') {
      diceRolls.push(Math.floor(Math.random() * 7 + 1));
    }
    else {
      for (let i = 1; i <= skillLevel; i++) {
        diceRolls.push(Math.floor(Math.random() * 10 + 1));
      };
    }
    addDiceRollsToLog(trainer, skill, diceRolls)
  }

  const handlePokemonDiceClick = (e) => {
    let skillLevel = 1;
    const skill = e.target.textContent;
    let diceRolls = [];
    for (let i = 1; i <= skillLevel; i++) {
      diceRolls.push(Math.floor(Math.random() * 10 + 1));
    };
    addDiceRollsToLog(pokemon, skill, diceRolls);
  }

  const handleLuckDiceClick = (e) => {
    let diceRolls = [];
    diceRolls.push(Math.floor(Math.random() * 100 + 1));
    addDiceRollsToLog(trainer, 'Chance', diceRolls);
  }


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
      <div className="mobile-tablet">
        <div className="dices-button" onClick={handleSidebarButtonClick}>
          <img src={diceIcon} alt="dice icon" />
        </div>
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="bottom"
          visible={visible}
        >
          <div className="dices-sidebar">
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
                        <button
                          className={`dice-button level-${trainer.do_it_yourself}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Bricolage
                        </button>
                        <button
                          className={`dice-button level-${trainer.charisma}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Charisme
                        </button>
                        <button
                          className={`dice-button level-${trainer.fighting}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Combat
                        </button>
                        <button
                          className={`dice-button level-${trainer.driving}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Conduite
                        </button>
                        <button
                          className={`dice-button level-${trainer.detection}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Détection
                        </button>
                        <button
                          className={`dice-button level-${trainer.furtivity}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Discrétion
                        </button>
                        <button
                          className={`dice-button level-${trainer.expression}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Expression
                        </button>
                        <button
                          className={`dice-button level-${trainer.phychology}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Psychologie
                        </button>
                        <button
                          className={`dice-button level-${trainer.sport}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Sport
                        </button>
                        <button
                          className={`dice-button level-${trainer.survival}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Survie
                        </button>
                        <button
                          className={`dice-button level-${trainer.education}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Education
                        </button>
                        <button
                          className={`dice-button level-${trainer.geography}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Géographie
                        </button>
                        <button
                          className={`dice-button level-${trainer.computer_science}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Informatique
                        </button>
                        <button
                          className={`dice-button level-${trainer.legend}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Légendes
                        </button>
                        <button
                          className={`dice-button level-${trainer.medicine}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Médecine
                        </button>
                        <button
                          className={`dice-button level-${trainer.pkmn_medicine}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Médecine Pokémon
                        </button>
                        <button
                          className={`dice-button level-${trainer.nature}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Nature
                        </button>
                        <button
                          className={`dice-button level-${trainer.phyche}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Psychisme
                        </button>
                        <button
                          className={`dice-button level-${trainer.science}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Sciences
                        </button>
                        <button
                          className={`dice-button level-${trainer.pokelogy}`}
                          onClick={handleTrainerDiceClick}
                        >
                          Pokélogie
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className={classNames(cssPokemonStyle)}>
                {isPokemonDicesActive === false && (
                  <>
                    <img className="avatar-dice pokemon" src={findPokemonImage(`${pokemon.id}drag.png`)} alt="" />
                    <button className="roll-button pokemon" onClick={handleDiceClick}>
                      Dés Pokémon
                      <span />
                    </button>
                  </>
                )}
                {isPokemonDicesActive && (
                  <>
                    <img className="avatar-dice pokemon" src={findPokemonImage(`${pokemon.id}.gif`)} alt="" />
                    <button className="roll-button pokemon" onClick={handleDiceClick}>
                      <img className="back-arrow pokemon" src={backArrow} alt="arrow back to dices" />
                      <span />
                    </button>
                    <div className="dice-buttons">
                      {/* <div className="buttons-legend">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div> */}
                      <div className="dice-button-list">
                        <button
                          className="dice-button level-null"
                          onClick={handlePokemonDiceClick}
                        >
                          Odorat
                        </button>
                        <button
                          className="dice-button level-null"
                          onClick={handlePokemonDiceClick}
                        >
                          Déplacement Rapide
                          </button>
                        <button
                          className="dice-button level-null"
                          onClick={handlePokemonDiceClick}
                        >
                          Détection
                        </button>
                        {pokemon.types[0].name === 'Psy' ||
                          (pokemon.types[1] !== undefined &&
                            pokemon.types[1].name === 'Psy') &&
                          <button
                            className="dice-button level-null"
                            onClick={handlePokemonDiceClick}
                          >
                            Télépathie
                            </button>
                        }
                        {pokemon.types[0].name === 'Spectre' ||
                          (pokemon.types[1] !== undefined &&
                            pokemon.types[1].name === 'Spectre') &&
                          <>
                            <button
                              className="dice-button level-null"
                              onClick={handlePokemonDiceClick}
                            >
                              Intangibilité
                            </button>
                            <button
                              className="dice-button level-null"
                              onClick={handlePokemonDiceClick}
                            >
                              Invisibilité
                            </button>
                          </>
                        }
                      </div>
                    </div>
                  </>
                )}

              </div>

              <div className={classNames(cssLuckStyle)}>
                <img className="avatar-dice" src={findPokemonImage('113drag.png')} alt="" />
                <button className="roll-button luck" onClick={handleLuckDiceClick}>
                  Roll Chance
                  <span />
                </button>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>


      <div className="desktop">
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
                    <button
                      className={`dice-button level-${trainer.do_it_yourself}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Bricolage
                    </button>
                    <button
                      className={`dice-button level-${trainer.charisma}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Charisme
                    </button>
                    <button
                      className={`dice-button level-${trainer.fighting}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Combat
                    </button>
                    <button
                      className={`dice-button level-${trainer.driving}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Conduite
                    </button>
                    <button
                      className={`dice-button level-${trainer.detection}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Détection
                    </button>
                    <button
                      className={`dice-button level-${trainer.furtivity}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Discrétion
                    </button>
                    <button
                      className={`dice-button level-${trainer.expression}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Expression
                    </button>
                    <button
                      className={`dice-button level-${trainer.phychology}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Psychologie
                    </button>
                    <button
                      className={`dice-button level-${trainer.sport}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Sport
                    </button>
                    <button
                      className={`dice-button level-${trainer.survival}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Survie
                    </button>
                    <button
                      className={`dice-button level-${trainer.education}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Education
                    </button>
                    <button
                      className={`dice-button level-${trainer.geography}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Géographie
                    </button>
                    <button
                      className={`dice-button level-${trainer.computer_science}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Informatique
                    </button>
                    <button
                      className={`dice-button level-${trainer.legend}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Légendes
                    </button>
                    <button
                      className={`dice-button level-${trainer.medicine}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Médecine
                    </button>
                    <button
                      className={`dice-button level-${trainer.pkmn_medicine}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Médecine Pokémon
                    </button>
                    <button
                      className={`dice-button level-${trainer.nature}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Nature
                    </button>
                    <button
                      className={`dice-button level-${trainer.phyche}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Psychisme
                    </button>
                    <button
                      className={`dice-button level-${trainer.science}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Sciences
                    </button>
                    <button
                      className={`dice-button level-${trainer.pokelogy}`}
                      onClick={handleTrainerDiceClick}
                    >
                      Pokélogie
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={classNames(cssPokemonStyle)}>
            {isPokemonDicesActive === false && (
              <>
                <img className="avatar-dice pokemon" src={findPokemonImage(`${pokemon.id}drag.png`)} alt="" />
                <button className="roll-button pokemon" onClick={handleDiceClick}>
                  Dés Pokémon
                  <span />
                </button>
              </>
            )}
            {isPokemonDicesActive && (
              <>
                <img className="avatar-dice pokemon" src={findPokemonImage(`${pokemon.id}.gif`)} alt="" />
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
                    <button
                      className="dice-button level-null"
                      onClick={handlePokemonDiceClick}
                    >
                      Odorat
                    </button>
                    <button
                      className="dice-button level-null"
                      onClick={handlePokemonDiceClick}
                    >
                      Déplacement Rapide
                      </button>
                    <button
                      className="dice-button level-null"
                      onClick={handlePokemonDiceClick}
                    >
                      Détection
                    </button>
                    {pokemon.types[0].name === 'Psy' ||
                      (pokemon.types[1] !== undefined &&
                        pokemon.types[1].name === 'Psy') &&
                      <button
                        className="dice-button level-null"
                        onClick={handlePokemonDiceClick}
                      >
                        Télépathie
                        </button>
                    }
                    {pokemon.types[0].name === 'Spectre' ||
                      (pokemon.types[1] !== undefined &&
                        pokemon.types[1].name === 'Spectre') &&
                      <>
                        <button
                          className="dice-button level-null"
                          onClick={handlePokemonDiceClick}
                        >
                          Intangibilité
                        </button>
                        <button
                          className="dice-button level-null"
                          onClick={handlePokemonDiceClick}
                        >
                          Invisibilité
                        </button>
                      </>
                    }
                  </div>
                </div>
              </>
            )}

          </div>

          <div className={classNames(cssLuckStyle)}>
            <img className="avatar-dice" src={findPokemonImage('113drag.png')} alt="" />
            <button className="roll-button luck" onClick={handleLuckDiceClick}>
              Roll Chance
              <span />
            </button>
          </div>
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
  visible: PropTypes.bool.isRequired,
  pokemon: PropTypes.object.isRequired,
  trainer: PropTypes.object.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  addDiceRollsToLog: PropTypes.func.isRequired,
};

// == Export
export default Dices;
