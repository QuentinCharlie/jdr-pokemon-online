import { WS_CONNECT } from 'src/actions/wsConnect';
import { ADD_ATTACK_RESULTS_TO_LOG } from 'src/actions/attacks';
import { ADD_DICE_ROLLS_TO_LOG } from 'src/actions/dices';
import { updateLogState } from 'src/actions/log';

let socket;

/* eslint-disable no-unused-vars, no-console */
const logMiddleware = (store) => (next) => (action) => {
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
      socket.on('load_state', (info) => {
        console.log('Retour du serveur: ...');
      });
      socket.on('add_attack_results_to_log', (info) => {
        console.log('Retour du serveur: add_attack_results_to_log');
        console.log(info);
        store.dispatch(updateLogState(info.log));
      });
      socket.on('add_dice_rolls_to_log', (info) => {
        console.log('Retour du serveur: add_dice_rolls_to_log');
        console.log(info);
        store.dispatch(updateLogState(info.log));
      });
      break;
      // Happened before WS_CONNECT socket.on(), send action to node.js server
    case ADD_ATTACK_RESULTS_TO_LOG:
      console.log('Envoi au serveur : add_attack_results_to_log');
      socket.emit('add_attack_results_to_log', action);
      console.log(action);
      break;
    case ADD_DICE_ROLLS_TO_LOG:
      console.log('Envoi au serveur : add_dice_rolls_to_log');
      socket.emit('add_dice_rolls_to_log', action);
      console.log(action);
      break;
      

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default logMiddleware;
