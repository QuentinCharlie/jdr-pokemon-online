import { combineReducers } from 'redux';

import demoReducer from './demo';

const rootReducer = combineReducers({
  demo: demoReducer,
  // ... autres reducers
});

export default rootReducer;


const pokemonPalette = {
  bulbizarre: [
    '#62d5b4',
    '#83eec5',
    '#184a4a',
  ],
  herbizarre: [
    '#5acdbd',
    '#317b52',
    '#104a39',
  ],
  florizzare: [
    '#105241',
    '#ff7b73',
    '#107b6a',
  ],
}

// faut pas les mettre dans le state les couleurs ;)
// Mais dans le theme :p
