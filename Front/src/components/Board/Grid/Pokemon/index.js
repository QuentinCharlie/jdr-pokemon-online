// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

import pokeGif from 'src/assets/images/pokemon/pikachu.gif';
import { ItemTypes } from './Constants';

// == Import

// == Composant
const Pokemon = ({ X, Y }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.POKEMON },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <img
      ref={drag}
      className="pikachu"
      src={pokeGif}
      alt=""
      style={{
        left: `calc( (50 * ${X}px) - 50px )`,
        top: `calc( (50 * ${Y}px) - 50px )`,
        zIndex: 50,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    />
  );
};

Pokemon.propTypes = {
  X: PropTypes.number.isRequired,
  Y: PropTypes.number.isRequired,
};

// == Export
export default Pokemon;
