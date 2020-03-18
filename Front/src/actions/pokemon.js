// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_ALL_POKEMONS = 'LOAD_ALL_POKEMONS';
export const DISPLAY_ALL_POKEMONS = 'DISPLAY_ALL_POKEMONS';
export const CHANGE_POKEMON_HEALTH = 'CHANGE_POKEMON_HEALTH';

// Action creators
export const loadAllPokemons = () => ({
  type: LOAD_ALL_POKEMONS,
});

export const displayAllPokemons = (pokemons) => ({
  type: DISPLAY_ALL_POKEMONS,
  pokemons,
});

export const changePokemonHealth = (mjTrainerUsername, healthNumber) => ({
  type: CHANGE_POKEMON_HEALTH,
  mjTrainerUsername,
  healthNumber,
})
