// Import utilitaire
// import {} from 'src/utils';

// Action types
export const UPDATE_LOG_STATE = 'UPDATE_LOG_STATE';

// Action creators
export const updateLogState = (logState) => ({
  type: UPDATE_LOG_STATE,
  logState,
});
