// Types
export const OPEN_DICE_LIST = 'OPEN_DICE_LIST';
export const ADD_DICE_ROLLS_TO_LOG = 'ADD_DICE_ROLLS_TO_LOG';

// Creators
export const openDiceList = (list) => ({
  type: OPEN_DICE_LIST,
  list,
});

export const addDiceRollsToLog = (roller, skill, diceRolls) => ({
  type: ADD_DICE_ROLLS_TO_LOG,
  roller,
  skill,
  diceRolls,
});
