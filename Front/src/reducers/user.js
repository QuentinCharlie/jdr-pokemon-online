// Action Types
import { LOAD_USER, LINK_TRAINER_TO_USER } from 'src/actions/user';

// Initial State
const initialState = {
  isUserReady: false,
  hasTrainer: false,
};

// Reducer
const userReducer = (state = initialState, action = {}) => {
  console.log('userReducer');
  const user = 'hehe';
  // let user = document.querySelector('#root').dataset.user;
  
  switch (action.type) {
    case LOAD_USER: 
      return {
          ...state,
          user: user,
        }

    case LINK_TRAINER_TO_USER: 
      return {
          ...state,
          hasTrainer: true,
          trainer: action.trainer,
        }

    default:
      return state;
  }
};


export default userReducer;
