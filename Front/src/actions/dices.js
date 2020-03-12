// Types
export const OPEN_DICE_LIST = 'OPEN_DICE_LIST';

// Creators
export const openDiceList = (list) => ({
  type: OPEN_DICE_LIST,
  list,
});
