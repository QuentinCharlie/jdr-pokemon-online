import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';
import gridReducer from './grid';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  grid: gridReducer,
  // ... autres reducers
});

export default rootReducer;
