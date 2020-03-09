// == Import npm
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

// == import files
import map from 'src/assets/images/map-town-width2500-height2500.png';

import Grid from 'src/containers/Grid';
// Styles
import BoardStyled from './BoardStyled';


// == Composant
const Board = () => {
  // const mapWidth =  2500 / 50;
  // const mapHeight = 2500 / 50;
  return (
    <BoardStyled>
      <ScrollContainer className="scroll-container">
        <img className="map" src={map} alt="" />
        {/* <img className="pikachu" src={pokeGif} alt="" /> */}
        <div id="board">
          <Grid />
        </div>
      </ScrollContainer>
    </BoardStyled>
  );
};

// == Export
export default Board;
