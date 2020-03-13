// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_USER = 'LOAD_USER';
export const SAVE_USER = 'SAVE_USER';

// Action creators
export const loadUser = () => ({
  type: LOAD_USER,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
