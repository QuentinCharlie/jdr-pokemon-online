// Action Types
import { DISPLAY_ALL_POKEMONS } from 'src/actions/pokemon';

// Import utils
import { pokemonAvailable } from 'src/utils/starterPokemons';

// Initial State
const initialState = {
};

// Reducer
const pokemonReducer = (state = initialState, action = {}) => {
  console.log('pokemonReducer');
  switch (action.type) {
    case DISPLAY_ALL_POKEMONS: {
      const starterPokemons = action.pokemons.filter(
        (pokemon) => pokemonAvailable.includes(pokemon.id),
      );
      return {
        ...state,
        allPokemons: action.pokemons,
        starterPokemons,
      };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
