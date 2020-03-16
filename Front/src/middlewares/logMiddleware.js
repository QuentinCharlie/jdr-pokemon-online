import { WS_CONNECT } from 'src/actions/wsConnect';

let socket;

/* eslint-disable no-unused-vars, no-console */
const logMiddleware = (store) => (next) => (action) => {
  let port = document.querySelector('#root').dataset.port; // @change prod
  // let port = 3001; // @change dev
  console.log(port);
  // console.log('logMiddleware laisse passer : ', action);

  switch (action.type) {
    case WS_CONNECT:
      // socket = io.connect(`http://54.89.22.26:${port}`);
      socket = io.connect(`http://localhost:${port}`); // @change prod
      // socket = window.io(`http://localhost:${port}`); // @change dev
      // Happened after case SOMETHING
      // receive action from node.js serve
      // then dispatch to state with WS_CONNECT
      socket.on('load_state', (info) => {
        console.log('Retour du serveur: ...');
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default logMiddleware;
