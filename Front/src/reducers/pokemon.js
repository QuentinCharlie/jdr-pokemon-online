// Action Types
import { DISPLAY_ALL_POKEMONS } from 'src/actions/pokemon';

// Initial State
const initialState = {
};

// Reducer
const pokemonReducer = (state = initialState, action = {}) => {
  console.log('pokemonReducer');
  switch (action.type) {
    case DISPLAY_ALL_POKEMONS:
      // console.log(action.pokemon);
      return {
        ...state,
        allPokemons: action.pokemons,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
