// Type
export const UPDATE_MJ_STATE = 'UPDATE_MJ_STATE';
export const CHANGE_MJ_STATE = 'CHANGE_MJ_STATE';
export const MJ_CHANGE_TRAINER = 'MJ_CHANGE_TRAINER';

// Creators
export const updateMjState = (username, mjName) => ({
  type: UPDATE_MJ_STATE,
  username,
  mjName,
});

export const changeMjState = (mjName) => ({
  type: CHANGE_MJ_STATE,
  mjName,
});

export const mjChangeTrainer = (trainerName, users) => ({
  type: MJ_CHANGE_TRAINER,
  trainerName,
  users,
});



