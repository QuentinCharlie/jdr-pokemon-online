import { combineReducers } from 'redux';

import dicesReducer from './dices';
import navReducer from './nav';

const rootReducer = combineReducers({
  dices: dicesReducer,
  nav: navReducer,
  // ... autres reducers
});

export default rootReducer;
