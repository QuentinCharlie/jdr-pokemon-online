import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  // ... autres reducers
});

export default rootReducer;
