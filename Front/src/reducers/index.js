import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';
import gridReducer from './grid';
import trainerReducer from './trainer';
import userReducer from './user';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  grid: gridReducer,
  trainer: trainerReducer,
  user: userReducer,
  pokemon: pokemonReducer,
  // ... autres reducers
});

export default rootReducer;
