// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_TRAINER = 'LOAD_TRAINER';
export const SAVE_TRAINER = 'SAVE_TRAINER';
export const LOAD_ALL_TRAINERS = 'LOAD_ALL_TRAINERS';
export const DISPLAY_ALL_TRAINERS = 'DISPLAY_ALL_TRAINERS';

// Action creators
export const loadTrainer = () => ({
  type: LOAD_TRAINER,
});
export const saveTrainer = (trainer) => ({
  type: SAVE_TRAINER,
  trainer,
});

export const loadAllTrainers = () => ({
  type: LOAD_ALL_TRAINERS,
});

export const displayAllTrainers = (trainers) => ({
  type: DISPLAY_ALL_TRAINERS,
  trainers,
});
