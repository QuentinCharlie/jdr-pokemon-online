/* eslint-disable no-unused-vars, no-console */
const logMiddleware = (store) => (next) => (action) => {
  console.log('logMiddleware laisse passer : ', action);

  // On passe au suivant
  next(action);
};

export default logMiddleware;
