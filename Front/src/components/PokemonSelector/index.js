// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import style
import PokemonSelectorStyled from './PokemonSelectorStyled';

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
    const pokemonName = e.target.dataset.name;
    const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName);
    linkPokemonToUser(pokemon);
  }
  
  return (
    <PokemonSelectorStyled>
    {pokemons !== undefined && 
      <>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={handleClick}
            data-name={pokemon.name}
          >
            {pokemon.name}
          </div>
        ))}
      </>
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
