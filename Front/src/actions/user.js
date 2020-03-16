// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_USER = 'LOAD_USER';
export const LOAD_STATE = 'LOAD_STATE';
export const USER_IS_READY = 'USER_IS_READY';
export const SAVE_USER = 'SAVE_USER';
export const LINK_TRAINER_TO_USER = 'LINK_TRAINER_TO_USER';
export const LINK_POKEMON_TO_USER = 'LINK_POKEMON_TO_USER';
export const SHARE_SELECTED_TRAINER_AND_POKEMON = 'SHARE_SELECTED_TRAINER_AND_POKEMON';
export const ADD_USER_TRAINER_AND_POKEMON_TO_STATE = 'ADD_USER_TRAINER_AND_POKEMON_TO_STATE';

// Action creators
export const loadState = () => ({
  type: LOAD_STATE,
});

export const userIsReady = () => ({
  type: USER_IS_READY,
});

export const loadUser = () => ({
  type: LOAD_USER,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const linkTrainerToUser = (trainer) => ({
  type: LINK_TRAINER_TO_USER,
  trainer,
});

export const linkPokemonToUser = (pokemon) => ({
  type: LINK_POKEMON_TO_USER,
  pokemon,
});

export const shareSelectedTrainerAndPokemonToUsers = (trainer, pokemon, username) => ({
  type: SHARE_SELECTED_TRAINER_AND_POKEMON,
  trainer,
  pokemon,
  username,
});

export const addUserTrainerAndPokemonToState = ({ trainer, pokemon, username }) => ({
  type: ADD_USER_TRAINER_AND_POKEMON_TO_STATE,
  trainer,
  pokemon,
  username,
});
