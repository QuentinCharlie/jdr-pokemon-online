// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { DragPreviewImage, useDrag } from 'react-dnd';

// Import Utils
import { findPokemonImage } from 'src/utils/functions';
// import pokeGif from 'src/assets/images/pokemon/pikachu.gif';
import { ItemTypes } from './Constants';

// == Import

// == Composant
const Pokemon = ({ userTrainer, pokemonTrainer, pokemon, X, Y }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.POKEMON },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });


  if (userTrainer.name === pokemonTrainer.name) {
    return (
      <>
        <DragPreviewImage connect={preview} src={findPokemonImage(`${pokemon.id}drag.png`)} />
        <div
          ref={drag}
          style={{
            height: '49px',
            position: 'absolute',
            cursor: 'move',
            zIndex: 50,
            left: isDragging ? `calc( (50 * ${X}px) - 50px )`:`calc( (50 * ${X}px) - 50px )`,
            top: isDragging ? `calc( (50 * ${Y}px) - 50px )` :`calc( (50 * ${Y}px) - 50px )`,
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          <img
            className={pokemon.name}
            src={findPokemonImage(`${pokemon.id}.gif`)}
            alt=""
            style={{
              height: '49px',
              left: `calc( (50 * ${X}px) - 50px )`,
              top: `calc( (50 * ${Y}px) - 50px )`,
              zIndex: 50,
              cursor: 'move',
            }}
          />
        </div>
      </>
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
