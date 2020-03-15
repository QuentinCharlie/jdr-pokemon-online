import { WS_CONNECT } from 'src/actions/wsConnect';
import { MOVE_POKEMON, addPokemonToCell } from 'src/actions/grid';

let socket;

/* eslint-disable no-unused-vars, no-console */
const boardMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  // let port = document.querySelector('#root').dataset.port;
  let port = 3001;
  console.log(port);
  // console.log('logMiddleware laisse passer : ', action);

  switch (action.type) {
    case WS_CONNECT:
      // socket = io.connect(`http://54.89.22.26:${port}`);
      // socket = io.connect(`http://localhost:${port}`);
      socket = window.io(`http://localhost:${port}`);
      // Happened after case SOMETHING
      // receive action from node.js serve
      // then dispatch to state with WS_CONNECT
      socket.on('move_pokemon', (info) => {
        console.log('Retour du serveur');
        store.dispatch(addPokemonToCell(info));
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server
    case MOVE_POKEMON: {
      console.log('Envoi au serveur');
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
