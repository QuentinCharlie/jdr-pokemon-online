// Action Types
import {
  UPDATE_GRID_STATE,
  ADD_POKEMON_TO_CELL,
  CHANGE_DRAG_OVER_CELL,
} from 'src/actions/grid';
// import { ADD_USER_TRAINER_AND_POKEMON_TO_GRID } from 'src/actions/user';

// const trainer = 'Sacha';
// const pokemon = 'Pikachu';
// Initial State
const initialState = {
  dragOverCell: {
  },
  trainers: [
  ],
};

// Reducer
const gridReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_GRID_STATE: {
      console.log(action.grid);
      return {
        ...state,
        ...action.grid,
      };
    }
    // case ADD_USER_TRAINER_AND_POKEMON_TO_GRID: {
    //   const trainerName = action.trainer.name;
    //   const pokemonName = action.pokemon.name;
    //   const stateTrainers = [
    //     ...state.trainers,
    //     {
    //       name: trainerName,
    //       position: {
    //       },
    //       pokemon: [
    //         {
    //           name: pokemonName,
    //           position: {
    //             X: action.trainer.id,
    //             Y: action.trainer.id,
    //           },
    //         },
    //       ],
    //     },
    //   ];

    //   return {
    //     ...state,
    //     dragOverCell: {
    //       ...state.dragOverCell,
    //     },
    //     trainers: stateTrainers,
    //   };
    // }
    case ADD_POKEMON_TO_CELL: {
      let trainerIndex = state.trainers.findIndex((trainer) => (
        trainer.name === action.trainerName
      ));
      // console.log(trainerIndex);
      let pokemonIndex = state.trainers[trainerIndex].pokemon.findIndex((pokemon) => (
        pokemon.name === action.pokemonName
      ));
      // console.log(pokemonIndex);
  
      const updatedTrainers = () => {
        return state.trainers.map((trainer) => {
          if (trainer.name !== action.trainerName) {
            return trainer;
          }
          return {
            ...trainer,
            pokemon: [
              ...trainer.pokemon.splice(0, pokemonIndex),
              {
                ...trainer.pokemon[pokemonIndex],
                position: {
                  X: action.X,
                  Y: action.Y,
                },
              },
              ...trainer.pokemon.splice(pokemonIndex + 1),
            ],
          };
        });
      };
      // console.log(updatedTrainers());
      return {
        ...state,
        trainers: updatedTrainers(),
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
