// Action Types
import {
  LOAD_POKEMON_IN_GRID,
  ADD_POKEMON_TO_CELL,
  CHANGE_DRAG_OVER_CELL,
} from 'src/actions/grid';

// const trainer = 'Sacha';
// const pokemon = 'Pikachu';
// Initial State
const initialState = {
  // dragOverCell: {
  // },
  // [trainer]: {
  //   position: {
  //   },
  //   pokemon: {
  //     [pokemon]: {
  //       position: {
  //       },
  //     },
  //   },
  // },
};

// Reducer
const gridReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_POKEMON_IN_GRID: {
      const trainerName = action.trainer.name;
      const pokemonName = action.pokemon.name;
      return {
        ...state,
        dragOverCell: {
          ...state.dragOverCell,
        },
        [trainerName]: {
          ...state.trainerName,
          position: {
            // ...state.trainerName.position,
          },
          pokemon: {
            // ...state.trainerName.pokemon,
            [pokemonName]: {
              // ...state.trainerName.pokemon.pokemonName,
              position: {
                // ...state.trainerName.pokemon.pokemonName.position,
              },
            },
          },
        },
      };
    }
    case ADD_POKEMON_TO_CELL: {
      return {
        ...state,
        [action.trainerName]: {
          ...state[action.trainerName],
          pokemon: {
            ...state[action.trainerName].pokemon,
            [action.pokemonName]: {
              ...state[action.trainerName].pokemon[action.pokemonName],
              position: {
                ...state[action.trainerName].pokemon[action.pokemonName].position,
                X: action.X,
                Y: action.Y,
              },
            },
          },
        },
      };
    }
    case CHANGE_DRAG_OVER_CELL:
      return {
        ...state,
        dragOverCell: {
          ...state.dragOverCell,
          X: action.X,
          Y: action.Y,
        },
      };

    default:
      return state;
  }
};

export default gridReducer;
