import { combineReducers } from 'redux';

import demoReducer from './demo';

const rootReducer = combineReducers({
  demo: demoReducer,
  // ... autres reducers
});

export default rootReducer;
