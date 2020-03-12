// Action Types
import { SAVE_TRAINER } from 'src/actions/trainer';

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
          [action.trainer.name]: action.trainer,
        },
      }
      break;
    }

    default:
      return state;
  }
};

export default trainerReducer;
