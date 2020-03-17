// Types
export const ADD_ATTACK_RESULTS_TO_LOG = 'ADD_ATTACK_RESULTS_TO_LOG';

// Creators
export const addAttackResultsToLog = (trainer, pokemon, attackName, attackResults) => ({
  type: ADD_ATTACK_RESULTS_TO_LOG,
  trainer,
  pokemon,
  attackName,
  attackResults,
});