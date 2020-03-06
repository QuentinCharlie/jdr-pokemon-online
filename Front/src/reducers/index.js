import { combineReducers } from 'redux';

import dicesReducer from './dices';
import navReducer from './nav';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  dices: dicesReducer,
  nav: navReducer,
  sidebar: sidebarReducer,
  // ... autres reducers
});

export default rootReducer;
