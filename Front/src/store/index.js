import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import boardMiddleware from 'src/middlewares/boardMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import trainerMiddleware from 'src/middlewares/trainerMiddleware';
import pokemonMiddleware from 'src/middlewares/pokemonMiddleware';
import logMiddleware from 'src/middlewares/logMiddleware';
import sharedMiddleware from 'src/middlewares/sharedMiddleware';

// Reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    boardMiddleware,
    logMiddleware,
    userMiddleware,
    sharedMiddleware,
    trainerMiddleware,
    pokemonMiddleware,
    // ... autres middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
