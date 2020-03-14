// Action Types
import { DISPLAY_ALL_POKEMONS } from 'src/actions/pokemon';

// Initial State
const initialState = {
};

// Reducer
const pokemonReducer = (state = initialState, action = {}) => {
  console.log('pokemonReducer');
  switch (action.type) {
    case DISPLAY_ALL_POKEMONS: {
      // console.log(action.pokemon);
      // eslint-disable-next-line max-len
      const pokemonAvailable = [1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 83, 84, 86, 88, 90, 92, 95, 96, 98, 100, 102, 104, 106, 107, 108, 109, 111, 113, 114, 115, 116, 118, 120, 122, 123, 125, 126, 127, 129, 132, 133, 137];
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
