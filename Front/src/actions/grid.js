// Types
export const ADD_POKEMON_TO_CELL = 'ADD_POKEMON_TO_CELL';

// Creators
export const addPokemonToCell = (trainerName, pokemonName, X, Y) => ({
  type: ADD_POKEMON_TO_CELL,
  trainerName,
  pokemonName,
  X,
  Y,
});
