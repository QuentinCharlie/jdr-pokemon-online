// Types
export const DO_SOMETHING = 'DO_SOMETHING';

// Creators
export const doSomething = (message) => ({
  type: DO_SOMETHING,
  message,
});
