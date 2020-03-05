// == Import npm
import React from 'react';

// == Import Components
import ProgressBar from 'src/components/ProgressBar';

// Styles
import PokemonStyled from './PokemonStyled';

// == Import files
import pokeAvatar from './25.png';

// == Composant
const Pokemon = () => (
  <PokemonStyled>
    <div className="pokemon-avatar">
      <img src={pokeAvatar} alt="avatar pokemon" />
      <div className="exp">
        <span>50 XP</span>
      </div>
      <div className="energy-container">
        <span>45/50</span>
        <div className="energy-bar" style={{ width: '90%' }} />
      </div>
      <div className="health-container">
        <span>20/100</span>
        <div className="health-bar" style={{ width: '20%' }} />
      </div>
    </div>
    <div className="pokemon-info">
      <div className="pokemon-presentation">
        <span className="pokemon-name">Pikachu</span>
        <span className="pokemon-type">
          <img src="https://www.pokebip.com/pokedex-images/types/psy.png" alt="" />
        </span>
      </div>
      <div className="pokemon-stats">
        <div className="stat">
          <span className="title"><abbr title="FORCE">FOR</abbr></span>
          <ProgressBar color="yellow" number={2} maxNumber={16} />
        </div>
        <div className="stat">
          <span className="title"><abbr title="ENDURANCE">END</abbr></span>
          <ProgressBar color="yellow" number={2} maxNumber={16} />
        </div>
        <div className="stat">
          <span className="title"><abbr title="CONCENTRATION">CON</abbr></span>
          <ProgressBar color="yellow" number={11} maxNumber={16} />
        </div>
        <div className="stat">
          <span className="title"><abbr title="VOLONTE">VOL</abbr></span>
          <ProgressBar color="yellow" number={6} maxNumber={16} />
        </div>
        <div className="stat">
          <span className="title"><abbr title="DEXTERITE">DEX</abbr></span>
          <ProgressBar color="yellow" number={9} maxNumber={16} />
        </div>
      </div>
    </div>
  </PokemonStyled>
);

// == Export
export default Pokemon;
