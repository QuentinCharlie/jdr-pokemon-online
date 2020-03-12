// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_TRAINER = 'LOAD_TRAINER';
export const SAVE_TRAINER = 'SAVE_TRAINER';

// Action creators
export const loadTrainer = () => ({
  type: LOAD_TRAINER,
});

export const saveTrainer = (trainer) => ({
  type: SAVE_TRAINER,
  trainer,
});
