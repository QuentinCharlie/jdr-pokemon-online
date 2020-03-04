// == Import npm
import React from 'react';

// == import files
import pokeGif from 'src/components/Pokemon/pikachu.gif';
// Styles
import BoardStyled from './BoardStyled';

// == Composant
const Board = () => (
  <BoardStyled>
    <img src={pokeGif} alt="" />
  </BoardStyled>
);

// == Export
export default Board;
