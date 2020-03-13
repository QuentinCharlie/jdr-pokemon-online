// Import utilitaire
// import {} from 'src/utils';

// Action types
export const LOAD_ALL_TRAINERS = 'LOAD_ALL_TRAINERS';
export const DISPLAY_ALL_TRAINERS = 'DISPLAY_ALL_TRAINERS';

// Action creators
export const loadAllTrainers = () => ({
  type: LOAD_ALL_TRAINERS,
});

export const displayAllTrainers = (trainers) => ({
  type: DISPLAY_ALL_TRAINERS,
  trainers,
});
