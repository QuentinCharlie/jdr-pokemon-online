import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';
import gridReducer from './grid';
import trainerReducer from './trainer';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  grid: gridReducer,
  trainer: trainerReducer,
  // ... autres reducers
});

export default rootReducer;
