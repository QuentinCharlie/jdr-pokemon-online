// Action Types
import { DISPLAY_ALL_TRAINERS } from 'src/actions/trainer';

// Initial State
const initialState = {
  isLoading: true,
};

// Reducer
const trainerReducer = (state = initialState, action = {}) => {
  console.log('trainerReducer');
  switch (action.type) {
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
