// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import PokemonSelectorStyled from './PokemonSelectorStyled';

// == Import utils
import { findPokemonImage } from 'src/utils/functions';

// == Import Components
import ProgressBar from 'src/components/ProgressBar';
import PokeballSpinner from 'src/components/PokemonSelector/PokeballSpinner';

// == Import files
import heartIcon from 'src/assets/images/heart.svg';

// == Composant
const PokemonSelector = ({
  pokemons,
  loadAllPokemons,
  linkPokemonToUser,
}) => {

  useEffect(() => {
    loadAllPokemons();
  }, []);
  
  const handleClick = (e)  => {
    const pokemonName = e.currentTarget.dataset.name;
    const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName);
    linkPokemonToUser(pokemon);
  }

  let pokemonMaxHealth = 125;
  
  return (
    <PokemonSelectorStyled>
    {pokemons === undefined && (
      <div className="loading">
        <PokeballSpinner />
      </div>
    )}
    {pokemons !== undefined && 
      <div className="pokemon-list">
        <div className="selection-header">
          <span>Choisis ton pokémon !</span>
        </div>
        {pokemons.map((pokemon) => (
          <div 
            className="pokemon-card"
            style={{ backgroundColor: `#${pokemon.primary}` }}
            key={pokemon.id}
            onClick={handleClick}
            data-name={pokemon.name}
          >
            <div className="pokemon-avatar">
                <div className="avatar-container">
                  <img src={findPokemonImage(`${pokemon.id}.png`)} alt="avatar pokemon" />
                </div>
              <div className="health-container">
                <span>{pokemon.vitality}</span>
                <img src={heartIcon} alt="heart logo" />
                <div className="health-bar" style={{ width: `${Math.ceil(pokemon.vitality / pokemonMaxHealth * 100)}%` }} />
              </div>
            </div>
            <div className="pokemon-info">
              <div className="pokemon-presentation">
                <span className="pokemon-name">{pokemon.name}</span>
                <div className="pokemon-types">
                  {pokemon.types.map((type) => (
                    <span 
                      key={type.id}
                      className="pokemon-type"
                      style={{ backgroundColor: `#${type.color}` }}
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pokemon-stats">
                <div className="stat">
                  <span className="title"><abbr title="FORCE">FOR</abbr></span>
                  <ProgressBar color="#f8cc53" number={pokemon.strength} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="ENDURANCE">END</abbr></span>
                  <ProgressBar color="#f8cc53" number={pokemon.endurance} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="CONCENTRATION">CON</abbr></span>
                  <ProgressBar color="#f8cc53" number={pokemon.concentration} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="VOLONTE">VOL</abbr></span>
                  <ProgressBar color="#f8cc53" number={pokemon.willpower} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="DEXTERITE">DEX</abbr></span>
                  <ProgressBar color="#f8cc53" number={pokemon.dexterity} maxNumber={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    }
    </PokemonSelectorStyled>
  );
};


// == Validation
PokemonSelector.propTypes = {
  pokemons: PropTypes.array,
  loadAllPokemons: PropTypes.func.isRequired,
  linkPokemonToUser: PropTypes.func.isRequired,
};

PokemonSelector.default = {
  pokemons: [],
};

// == Export
export default PokemonSelector;
