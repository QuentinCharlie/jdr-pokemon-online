// Types
export const ADD_POKEMON_TO_CELL = 'ADD_POKEMON_TO_CELL';
export const CHANGE_DRAG_OVER_CELL = 'CHANGE_DRAG_OVER_CELL';

// Creators
export const changeDragOverCell = (X, Y) => ({
  type: CHANGE_DRAG_OVER_CELL,
  X,
  Y,
});

export const addPokemonToCell = (trainerName, pokemonName, X, Y) => ({
  type: ADD_POKEMON_TO_CELL,
  trainerName,
  pokemonName,
  X,
  Y,
});


