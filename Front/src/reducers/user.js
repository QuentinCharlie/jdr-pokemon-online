// Action Types
import { LOAD_USER } from 'src/actions/user';

// Initial State
const initialState = {
  isUserReady: false,
};

// Reducer
const userReducer = (state = initialState, action = {}) => {
  console.log('userReducer');
  const user = "hehe";
  // let user = document.querySelector('#root').dataset.user;
  
  switch (action.type) {
    case LOAD_USER: 
    return {
        ...state,
        user: user,
      }
      break;

    default:
      return state;
  }
};


export default userReducer;
