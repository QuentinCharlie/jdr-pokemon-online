// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

// Import Utils
import { findPokemonImage } from 'src/utils/functions';
// import pokeGif from 'src/assets/images/pokemon/pikachu.gif';
import { ItemTypes } from './Constants';

// == Import

// == Composant
const Pokemon = ({ userTrainer, pokemonTrainer, pokemon, X, Y }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.POKEMON },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  if (userTrainer.name === pokemonTrainer.name) {
    return (
      <img
        ref={drag}
        className={pokemon.name}
        src={findPokemonImage(`${pokemon.id}.gif`)}
        alt=""
        style={{
          height: '49px',
          left: `calc( (50 * ${X}px) - 50px )`,
          top: `calc( (50 * ${Y}px) - 50px )`,
          position: 'absolute',
          zIndex: 50,
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      />
    );
  }
  return (
    <img
      className={pokemon.name}
      src={findPokemonImage(`${pokemon.id}.gif`)}
      alt=""
      style={{
        height: '49px',
        left: `calc( (50 * ${X}px) - 50px )`,
        top: `calc( (50 * ${Y}px) - 50px )`,
        position: 'absolute',
        zIndex: 50,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    />
  );
};

Pokemon.propTypes = {
  userTrainer: PropTypes.object.isRequired,
  pokemonTrainer: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
};

// == Export
export default Pokemon;
