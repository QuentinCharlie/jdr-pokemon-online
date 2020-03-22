/* eslint-disable object-shorthand */
// Action Types
import { UPDATE_LOG_STATE } from 'src/actions/log';

// Initial State
const initialState = {
  entries: [
  //   {
  //     id,
  //     attack : 
  //     {
  //       title,
  //       attack,
  //       diceroll,
  //       resultDamage,
  //       resultStatus,
  //     },
  //     dice : 
  //     {
  //       title,
  //       diceroll,
  //     },   
  //   },
  ],
};

// Reducer
const logReducer = (state = initialState, action = {}) => {
  console.log('logReducer');

  switch (action.type) {
    case UPDATE_LOG_STATE: {
      console.log(action.logState);
      return {
        ...state,
        entries: [
          // ...state.entries,
          ...action.logState.entries,
        ],
      };
    }

    default:
      return state;
  }
};


export default logReducer;
