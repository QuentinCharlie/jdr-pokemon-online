// Action Types
import { OPEN_DICE_LIST } from 'src/actions/dices';

// Initial State
const initialState = {
  isTrainerDicesActive: false,
  isPokemonDicesActive: false,
};

// Reducer
const dicesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_DICE_LIST: {
      if (action.list.includes('trainer')) {
        return {
          ...state,
          isTrainerDicesActive: !state.isTrainerDicesActive,
        };
      }
      if (action.list.includes('pokemon')) {
        return {
          ...state,
          isPokemonDicesActive: !state.isPokemonDicesActive,
        };
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default dicesReducer;
