/* eslint-disable react/button-has-type */
// == Import npm
import React from 'react';

// Styles
import DicesStyled from './DicesStyled';

// == Import files
import ashTrainer from './sacha-face.png';


// == Composant
const Dices = () => (
  <DicesStyled>
    <div className="dices">
      <div className="dice dice-trainer">
        <img src={ashTrainer} alt="" />
        <button>Dés Dresseur<span /></button>
      </div>
      <div className="dice dice-pokemon">
        <img src="https://img.pokemondb.net/sprites/black-white/normal/abra.png" alt="" />
        <button>Dés Pokémon<span /></button>
      </div>
      <div className=" dice dice-luck">
        <img src="https://img.pokemondb.net/sprites/black-white/normal/chansey.png" alt="" />
        <button>Roll Chance<span /></button>
      </div>
    </div>
    <div className="trainer-list-dices" />
    <div className="pokemon-list-dices" />

  </DicesStyled>
);

// == Export
export default Dices;
