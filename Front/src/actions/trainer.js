// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_ALL_TRAINERS = 'LOAD_ALL_TRAINERS';
export const DISPLAY_ALL_TRAINERS = 'DISPLAY_ALL_TRAINERS';
export const CHANGE_TRAINER_HEALTH = 'CHANGE_TRAINER_HEALTH';

// Action creators
export const loadAllTrainers = () => ({
  type: LOAD_ALL_TRAINERS,
});

export const displayAllTrainers = (trainers) => ({
  type: DISPLAY_ALL_TRAINERS,
  trainers,
});

export const changeTrainerHealth = (mjTrainerUsername, healthNumber) => ({
  type: CHANGE_TRAINER_HEALTH,
  mjTrainerUsername,
  healthNumber,
})
