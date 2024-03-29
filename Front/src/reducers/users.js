/* eslint-disable object-shorthand */
// Action Types
import { UPDATE_USERS_STATE } from 'src/actions/users';

// Initial State
const initialState = {
};

// Reducer
const usersReducer = (state = initialState, action = {}) => {
  console.log('usersReducer');

  switch (action.type) {
    case UPDATE_USERS_STATE: {
      console.log(action.users);
      return {
        ...state,
        ...action.users,
      };
    }

    default:
      return state;
  }
};


export default usersReducer;
