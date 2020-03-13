import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import boardMiddleware from 'src/middlewares/boardMiddleware';
import trainerMiddleware from 'src/middlewares/trainerMiddleware';
import pokemonMiddleware from 'src/middlewares/pokemonMiddleware';

// Reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    boardMiddleware,
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
