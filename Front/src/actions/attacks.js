// Types
export const ADD_ATTACK_RESULTS_TO_LOG = 'ADD_ATTACK_RESULTS_TO_LOG';
export const SUBSTRACT_ENERGY = 'SUBSTRACT_ENERGY';

// Creators
export const addAttackResultsToLog = (trainer, pokemon, attackName, attackResults) => ({
  type: ADD_ATTACK_RESULTS_TO_LOG,
  trainer,
  pokemon,
  attackName,
  attackResults,
});

export const substractEnergy = (username, pokemon, energy) => ({
  type: SUBSTRACT_ENERGY,
  username,
  pokemon,
  energy,
});

