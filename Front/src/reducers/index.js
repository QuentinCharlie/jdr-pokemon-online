import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';
import gridReducer from './grid';
import trainerReducer from './trainer';
import userReducer from './user';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  grid: gridReducer,
  trainer: trainerReducer,
  user: userReducer,
  // ... autres reducers
});

export default rootReducer;
