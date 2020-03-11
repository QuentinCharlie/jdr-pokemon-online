/* eslint-disable arrow-body-style */
// == Import npm
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'
// import TouchBackend from 'react-dnd-touch-backend';

// == import files
import map from 'src/assets/images/map-town-light.jpg';

import Grid from 'src/containers/Grid';
// Styles
import BoardStyled from './BoardStyled';


// == Composant
const Board = () => {
  // const mapWidth =  2500 / 50;
  // const mapHeight = 2500 / 50;
  return (
    <DndProvider backend={Backend}>
      <BoardStyled>
        <ScrollContainer className="scroll-container" ignoreElements="img">
          <img className="map" src={map} alt="" />
          {/* <img className="pikachu" src={pokeGif} alt="" /> */}
          <div id="board">
            <Grid />
          </div>
        </ScrollContainer>
      </BoardStyled>
    </DndProvider>
  );
};

// == Export
export default Board;
