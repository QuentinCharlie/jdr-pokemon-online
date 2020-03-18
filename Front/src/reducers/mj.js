/* eslint-disable object-shorthand */
// Action Types
import { UPDATE_MJ_STATE } from 'src/actions/mj';

// Initial State
const initialState = {
};

// Reducer
const mjReducer = (state = initialState, action = {}) => {
  console.log('mjReducer');
  // let user = document.querySelector('#root').dataset.user;

  switch (action.type) {
    case UPDATE_MJ_STATE: {
      console.log(action);
      return {
        ...state,
        isAlreadyMj: true,
        mjName: action.mjName,
      };
    }

    default:
      return state;
  }
};


export default mjReducer;
