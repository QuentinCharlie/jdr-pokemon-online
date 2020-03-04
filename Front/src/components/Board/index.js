// == Import npm
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

// == import files
// import pokeGif from 'src/assets/images/pikachu.gif';
import map from 'src/assets/images/pokemon-map.png';
// Styles
import BoardStyled from './BoardStyled';

// == Composant
const Board = () => (
  <BoardStyled>
    <ScrollContainer className="scroll-container">
      <img src={map} alt="" />
    </ScrollContainer>
  </BoardStyled>
);

// == Export
export default Board;
