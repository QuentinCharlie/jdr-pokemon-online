import { WS_CONNECT } from 'src/actions/wsConnect';
import { MOVE_POKEMON, addPokemonToCell } from 'src/actions/grid';

let socket;

/* eslint-disable no-unused-vars, no-console */
const boardMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  // console.log('logMiddleware laisse passer : ', action);
  
  switch (action.type) {
    // Happened after case SOMETHING
    // receive action from node.js serve
    // then dispatch to state with WS_CONNECT
    case WS_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('move_pokemon', (info) => {
        console.log('Retour du serveur');
        store.dispatch(addPokemonToCell(info));
      });
      break;
      
      // Happened before WS_CONNECT, send action to node.js server
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
