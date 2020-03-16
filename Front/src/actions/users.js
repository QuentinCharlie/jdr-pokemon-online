// Import utilitaire
// import {} from 'src/utils';

// Action types
export const ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE = 'ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE';
export const UPDATE_USERS_STATE = 'UPDATE_USERS_STATE';


// Action creators
export const addUserTrainerAndPokemonToUsersState = ({ trainer, pokemon, username }) => ({
  type: ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE,
  trainer,
  pokemon,
  username,
});

export const updateUsersState = (users) => ({
  type: UPDATE_USERS_STATE,
  users,
});

