/* eslint-disable object-shorthand */
// Action Types
import { 
  LOAD_USER,
  LINK_TRAINER_TO_USER,
  LINK_POKEMON_TO_USER,
  USER_IS_READY,
  UPDATE_USER,
} from 'src/actions/user';
import { UPDATE_MJ_STATE } from 'src/actions/mj';

// Initial State
const initialState = {
  hasTrainer: false,
  hasPokemon: false,
  isUserReady: false,
  isMj: true,
};

// Reducer
const userReducer = (state = initialState, action = {}) => {
  console.log('userReducer');
  // let username = document.querySelector('#root').dataset.username; // @ change prod
  // const isMj = document.querySelector('#root').dataset.mj;

  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
          username: `${Math.floor(Math.random() * (100000000000 - 1 +1)) + 1}`, // @change dev
          // username, // @change prod

      };

    case UPDATE_USER:
      return {
        ...state,
        isMj: false,
        isUserReady: false,
      }
    
    case UPDATE_MJ_STATE: {
      console.log(action);
      if (action.username === action.mjName){
        return {
          ...state,
          hasTrainer: false,
          hasPokemon: false,
          isUserReady: true,
          isMj: true,
        };
      }
      if (action.username !== action.mjName && state.isUserReady) {
        return {
          ...state,
          hasTrainer: true,
          hasPokemon: true,
          isUserReady: true,
          isMj: false,
        };
      }
      return {
        ...state,
        hasTrainer: false,
        hasPokemon: false,
        isUserReady: false,
        isMj: false,
      };
    }
    

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
