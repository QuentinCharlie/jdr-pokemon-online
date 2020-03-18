/* eslint-disable object-shorthand */
// Action Types
import { UPDATE_MJ_STATE, MJ_CHANGE_TRAINER } from 'src/actions/mj';

// Initial State
const initialState = {
  mjTrainerIndex: 0, 
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

    case MJ_CHANGE_TRAINER: {
      console.log(action);
      const allUsers = action.users;
       console.log(allUsers);
      const index = allUsers.findIndex((user) => user.trainer.name === action.trainerName);
      console.log(index);
      return {
        ...state,
        mjTrainerIndex: index,
      };
    }

    default:
      return state;
  }
};


export default mjReducer;
