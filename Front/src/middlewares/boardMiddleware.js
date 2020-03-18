import { WS_CONNECT } from 'src/actions/wsConnect';
import { MOVE_POKEMON, addPokemonToCell, updateGridState } from 'src/actions/grid';
import { ADD_USER_TRAINER_AND_POKEMON_TO_GRID } from 'src/actions/user';

let socket;

/* eslint-disable no-unused-vars, no-console */
const boardMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  // let port = document.querySelector('#root').dataset.port; // @change prod
  let port = 3001; // @change dev
  console.log(port);
  // console.log('logMiddleware laisse passer : ', action);

  switch (action.type) {
    case WS_CONNECT:
      // socket = io.connect(`http://54.89.22.26:${port}`); // @change prod
      // socket = io.connect(`http://localhost:${port}`); 
      socket = window.io(`http://localhost:${port}`); // @change dev
      // Happened after case SOMETHING
      // receive action from node.js serve
      // then dispatch to state with WS_CONNECT
      socket.on('add_user_trainer_and_pokemon_to_grid', (info) => {
        console.log('Retour du serveur: add_user_trainer_and_pokemon_to_grid');
        console.log(info);
        store.dispatch(updateGridState(info.grid));
      });
      socket.on('move_pokemon', (info) => {
        console.log('Retour du serveur: move_pokemon');
        store.dispatch(addPokemonToCell(info));
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server
    case ADD_USER_TRAINER_AND_POKEMON_TO_GRID: {
      console.log('Envoi au serveur : add_user_trainer_and_pokemon_to_grid');
      socket.emit('add_user_trainer_and_pokemon_to_grid', action);
      break;
    }
    case MOVE_POKEMON: {
      console.log('Envoi au serveur: move_pokemon');
      socket.emit('move_pokemon', action);
      break;
    }

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default boardMiddleware;
