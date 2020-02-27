// == Import npm
import React from 'react';

// Styles
import LogStyled from './LogStyled';


// == Composant
const Log = () => (
  <LogStyled>
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
  </LogStyled>
);

// == Export
export default Log;
