import { combineReducers } from 'redux';

import dicesReducer from './dices';

const rootReducer = combineReducers({
  dices: dicesReducer,
  // ... autres reducers
});

export default rootReducer;
