/* eslint-disable object-shorthand */
// Action Types
import { 
  LOAD_USER,
  LINK_TRAINER_TO_USER,
  LINK_POKEMON_TO_USER,
  USER_IS_READY,
} from 'src/actions/user';

// Initial State
const initialState = {
  hasTrainer: false,
  hasPokemon: false,
  isUserReady: false,
};

// Reducer
const userReducer = (state = initialState, action = {}) => {
  console.log('userReducer');
  // let user = document.querySelector('#root').dataset.user;

  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        username: `${Math.floor(Math.random() * (100000000000 - 1 +1)) + 1}`,
      };

    case LINK_TRAINER_TO_USER:
      return {
        ...state,
        hasTrainer: true,
        trainer: {
          ...action.trainer,
          money: 5000,
          exp: 0,
          history: 'Historique des parties précédentes',
          notes: 'Notes du dresseur',
        },
      };

    case LINK_POKEMON_TO_USER:
      return {
        ...state,
        hasPokemon: true,
        pokemon: action.pokemon,
      };
    
    case USER_IS_READY:
      return {
        ...state,
        isUserReady: true,
      }

    default:
      return state;
  }
};


export default userReducer;
