// Types
export const LOAD_POKEMON_IN_GRID = 'LOAD_POKEMON_IN_GRID';
export const ADD_POKEMON_TO_CELL = 'ADD_POKEMON_TO_CELL';
export const CHANGE_DRAG_OVER_CELL = 'CHANGE_DRAG_OVER_CELL';
export const MOVE_POKEMON = 'MOVE_POKEMON';
export const UPDATE_GRID_STATE = 'UPDATE_GRID_STATE';


// Creators
export const updateGridState = (gridState) => ({
  type: UPDATE_GRID_STATE,
  gridState,
});

export const loadPokemonInGrid = (trainer, pokemon) => ({
  type: LOAD_POKEMON_IN_GRID,
  trainer,
  pokemon,
});

export const addPokemonToCell = (info) => ({
  type: ADD_POKEMON_TO_CELL,
  trainerName: info.trainerName,
  pokemonName: info.pokemonName,
  X: info.X,
  Y: info.Y,
});

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
