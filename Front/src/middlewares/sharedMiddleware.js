import { WS_CONNECT } from 'src/actions/wsConnect';
import { LOAD_STATE } from 'src/actions/user';
import { updateGridState } from 'src/actions/grid';
import { updateLogState } from 'src/actions/log';
import { userIsReady, updateUser } from 'src/actions/user';
import { loadAllTrainers } from 'src/actions/trainer';
import { loadAllPokemons } from 'src/actions/pokemon';
import { changeMjState, updateMjState, CHANGE_MJ_STATE } from 'src/actions/mj';
import { 
  ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE,
  updateUsersState,
} from 'src/actions/users';
import { SUBSTRACT_ENERGY } from 'src/actions/attacks';

let socket;

/* eslint-disable no-unused-vars, no-console */
const sharedMiddleware = (store) => (next) => (action) => {
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
        console.log('Retour du serveur: load_state');
        console.log(info);
        store.dispatch(loadAllTrainers());
        store.dispatch(loadAllPokemons());

        const state = store.getState();
        store.dispatch(updateMjState(state.user.username, info.mj.mjName));
        if (state.mj.mjName === undefined) {
        store.dispatch(changeMjState(state.user.username));  
        }
        // store.dispatch(updateMjState(state.user.username, info.mj.mjName));         
        // store.dispatch(updateUser());

        store.dispatch(updateGridState(info.grid));        
        store.dispatch(updateLogState(info.log));
        store.dispatch(updateUsersState(info.users));
      });
      socket.on('change_mj_state', (info) => {
        console.log('Retour du serveur: change_mj_state');
        const state = store.getState();
        store.dispatch(updateMjState(state.user.username, info.mj.mjName)); 
      });
      socket.on('add_pokemon_and_trainer_to_users_state', (info) => {
        console.log('Retour du serveur: add_pokemon_and_trainer_to_users_state');
        store.dispatch(updateUsersState(info)) 
        const playerName = store.getState().user.username;
        if (info[playerName] !== undefined) {
          store.dispatch(userIsReady());
        }
      });
      socket.on('substract_energy', (info) => {
        console.log('Retour du serveur: substract_energy');
        console.log(info);
        store.dispatch(updateUsersState(info.users)); 
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server
    case LOAD_STATE: {
      console.log('Envoi au serveur: load_state');
      socket.emit('load_state');
      break;
    }
    case CHANGE_MJ_STATE: {
      console.log('Envoi au serveur: change_mj_state');
      socket.emit('change_mj_state', (action));
      break;
    }

    case ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE: {
      console.log('Envoi au serveur: add_pokemon_and_trainer_to_users_state');
      socket.emit('add_pokemon_and_trainer_to_users_state', (action));
      break;
    }

    case SUBSTRACT_ENERGY: {
      console.log('Envoi au serveur: substract_energy');
      console.log(action);
      socket.emit('substract_energy', (action));
      break;
    }

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default sharedMiddleware;
