/* eslint-disable object-shorthand */
// Action Types
import { LOAD_USER, LINK_TRAINER_TO_USER, LINK_POKEMON_TO_USER } from 'src/actions/user';

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
        isUserReady: true,
        pokemon: action.pokemon,
      };

    default:
      return state;
  }
};


export default userReducer;
