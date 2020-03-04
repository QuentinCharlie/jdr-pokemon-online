// == Import npm
import React from 'react';

// == import files
// import pokeGif from 'src/assets/images/pikachu.gif';
import map from 'src/assets/images/pokemon-map.png';
// Styles
import BoardStyled from './BoardStyled';

// == Composant
const Board = () => (
  <BoardStyled>
    <img src={map} alt="" />
  </BoardStyled>
);

// == Export
export default Board;
