import { WS_CONNECT } from 'src/actions/wsConnect';
import { LOAD_STATE } from 'src/actions/user';
import { updateGridState } from 'src/actions/grid';
import { updateLogState } from 'src/actions/log';

let socket;

/* eslint-disable no-unused-vars, no-console */
const logMiddleware = (store) => (next) => (action) => {
  // let port = document.querySelector('#root').dataset.port; // prod
  let port = 3001; // dev
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
      socket.on('load_state', (info) => {
        console.log('Retour du serveur: load_state');
        store.dispatch(updateGridState(info.grid));
        store.dispatch(updateLogState(info.log));
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server
    case LOAD_STATE: {
      console.log('Envoi au serveur: load_state');
      socket.emit('load_state');
      break;
    }

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default logMiddleware;
