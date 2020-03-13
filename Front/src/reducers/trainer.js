// Action Types
import { SAVE_TRAINER, DISPLAY_ALL_TRAINERS } from 'src/actions/trainer';

// Initial State
const initialState = {
  isLoading: true,
};

// Reducer
const trainerReducer = (state = initialState, action = {}) => {
  console.log('trainerReducer');
  switch (action.type) {
    case SAVE_TRAINER: {
      console.log(action.trainer);
      return {
        ...state,
        isLoading: false,
        trainers: {
          ...state.trainers,
          [action.trainer.name]: {
            ...action.trainer,
            money: 5000,
            exp: 0,
            history: 'Historique des parties précédentes',
            notes: 'Notes du dresseur',
          },
        },
      };
    }
    case DISPLAY_ALL_TRAINERS:
      // console.log(action.trainer);
      return {
        ...state,
        allTrainers: action.trainers,
      };

    default:
      return state;
  }
};

export default trainerReducer;
