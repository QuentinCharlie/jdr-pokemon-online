// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_USER = 'LOAD_USER';
export const SAVE_USER = 'SAVE_USER';
export const LINK_TRAINER_TO_USER = 'LINK_TRAINER_TO_USER';

// Action creators
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
