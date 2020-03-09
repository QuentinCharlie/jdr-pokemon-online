// Action Types
import { ADD_POKEMON_TO_CELL } from 'src/actions/grid';

const trainer = 'Sacha';
// Initial State
const initialState = {
  [trainer]: {
    position: {
    },
    pokemon: {
    },
  },
};

// Reducer
const gridReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_POKEMON_TO_CELL: {
      return {
        ...state,
        [action.trainerName]: {
          ...state[action.trainerName],
          pokemon: {
            ...state[action.trainerName].pokemon,
            [action.pokemonName]: {
              ...state[action.trainerName].pokemon[action.pokemonName],
              X: action.X,
              Y: action.Y,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export default gridReducer;
