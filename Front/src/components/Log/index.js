// == Import npm
import React from 'react';

// Styles
import LogStyled from './LogStyled';


// == Composant
const Log = () => (
  <LogStyled>
    <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#19cd70" fill-opacity="1" d="M0,320L1440,96L1440,0L0,0Z"></path></svg>
    <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#60eca3" fill-opacity="1" d="M0,160L1440,32L1440,0L0,0Z"></path></svg>
    <div className="log">
      <div className="entry" id="1">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="2">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="3">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="4">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="5">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="6">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="7">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
      <div className="entry" id="8">
        <p className="name">Pikachu de Sacha attaque Onyx de Pierre :</p>
        <div className="turn">
          <p className="action">Attaque Tonnerre</p>
          <p className="diceRoll">Jet d'attaque : 8, 7, 2, 1</p>
          <div className="result">
            <p className="result-damage">Degats infligés : 2</p>
            <p className="result-status">Statut : Paralysé</p>
          </div>
        </div>
      </div>
    </div>
    <div className="current-player">
      <p className="turn-name">C'est au tour de Ondine</p>
    </div>
    <svg className="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#139f57" fill-opacity="1" d="M0,0L1440,32L1440,320L0,320Z"></path></svg>
  </LogStyled>
);

// == Export
export default Log;
