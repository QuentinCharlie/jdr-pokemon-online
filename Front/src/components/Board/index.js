// == Import npm
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

// == import files
import pokeGif from 'src/assets/images/pikachu.gif';
import map from 'src/assets/images/pokemon-map.png';

import CellRow from 'src/components/Board/CellRow';
// Styles
import BoardStyled from './BoardStyled';


// == Composant
const Board = () => (
  <BoardStyled>
    <ScrollContainer className="scroll-container">
      <img className="map" src={map} alt="" />
      <img className="pikachu" src={pokeGif} alt="" />
      <div id="board">
        <CellRow id="row1" />
        <CellRow id="row2" />
        <CellRow id="row3" />
        <CellRow id="row4" />
        <CellRow id="row5" />
        <CellRow id="row6" />
        <CellRow id="row7" />
        <CellRow id="row8" />
        <CellRow id="row9" />
        <CellRow id="row10" />
        <CellRow id="row11" />
        <CellRow id="row12" />
        <CellRow id="row13" />
        <CellRow id="row14" />
        <CellRow id="row15" />
        <CellRow id="row16" />
        <CellRow id="row17" />
        <CellRow id="row18" />
        <CellRow id="row19" />
        <CellRow id="row20" />
        <CellRow id="row21" />
        <CellRow id="row22" />
        <CellRow id="row23" />
        <CellRow id="row24" />
        <CellRow id="row25" />
        <CellRow id="row26" />
        <CellRow id="row27" />
        <CellRow id="row28" />
        <CellRow id="row29" />
        <CellRow id="row30" />
        <CellRow id="row31" />
        <CellRow id="row32" />
        <CellRow id="row33" />
        <CellRow id="row34" />
        <CellRow id="row35" />
        <CellRow id="row36" />
        <CellRow id="row37" />
      </div>
    </ScrollContainer>
  </BoardStyled>
);

// == Export
export default Board;
