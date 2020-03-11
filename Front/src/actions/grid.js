// Types
export const MOVE_POKEMON = 'MOVE_POKEMON';
export const ADD_POKEMON_TO_CELL = 'ADD_POKEMON_TO_CELL';
export const CHANGE_DRAG_OVER_CELL = 'CHANGE_DRAG_OVER_CELL';

// Creators
export const changeDragOverCell = (X, Y) => ({
  type: CHANGE_DRAG_OVER_CELL,
  X,
  Y,
});

export const movePokemon = (trainerName, pokemonName, X, Y) => ({
  type: MOVE_POKEMON,
  trainerName,
  pokemonName,
  X,
  Y,
});

export const addPokemonToCell = (info) => ({
  type: ADD_POKEMON_TO_CELL,
  trainerName: info.trainerName,
  pokemonName: info.pokemonName,
  X: info.X,
  Y: info.Y,
});


