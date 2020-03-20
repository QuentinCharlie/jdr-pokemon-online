import { WS_CONNECT } from 'src/actions/wsConnect';
import { LOAD_STATE } from 'src/actions/user';
import { updateGridState } from 'src/actions/grid';
import { updateLogState } from 'src/actions/log';
import { userIsReady, linkTrainerToUser, linkPokemonToUser } from 'src/actions/user';
import { loadAllTrainers, CHANGE_TRAINER_HEALTH } from 'src/actions/trainer';
import { loadAllPokemons, CHANGE_POKEMON_HEALTH } from 'src/actions/pokemon';
import { changeMjState, updateMjState, CHANGE_MJ_STATE } from 'src/actions/mj';
import {
  ADD_USER_TRAINER_AND_POKEMON_TO_USERS_STATE,
  updateUsersState,
} from 'src/actions/users';
import { SUBSTRACT_ENERGY } from 'src/actions/attacks';

let socket;

/* eslint-disable no-unused-vars, no-console */
const sharedMiddleware = (store) => (next) => (action) => {
  let port = document.querySelector('#root').dataset.port; // @change prod
  // let port = 3001; // @change dev
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
        const state = store.getState();
        console.log('Retour du serveur: load_state');
        console.log(info);

        store.dispatch(updateGridState(info.grid));
        store.dispatch(updateLogState(info.log));
        store.dispatch(updateUsersState(info.users));

        const playerName = state.user.username;
        const mjName = info.mj.mjName;
        const usersKeys = Object.keys(info.users);
        const isThisAnUserReconnection = usersKeys.includes(playerName);
        const isThisAnMjReconnection = playerName === mjName;
        console.log(playerName);
        console.log(mjName);
        console.log(usersKeys);
        console.log(isThisAnUserReconnection);
        console.log(isThisAnMjReconnection);
        console.log("loadState before if");

        if (mjName !== undefined && isThisAnMjReconnection) {
          console.log("IFFFFFFFFFFFFFFFFFFFFFF");
          store.dispatch(updateMjState(playerName, mjName));
        }
        else if (mjName !== undefined && isThisAnUserReconnection) {
          console.log("ELSSSSSSSSSSSEIFFFFFFFFFFFFFFFF");
          const pokemon = info.users[playerName].pokemon[0];
          const trainer = info.users[playerName].trainer;
          store.dispatch(linkTrainerToUser(trainer));
          store.dispatch(linkPokemonToUser(pokemon));
          store.dispatch(userIsReady());
        }
        else {
          console.log("ELSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSEEEEE");
          store.dispatch(loadAllTrainers());
          store.dispatch(loadAllPokemons());
          store.dispatch(updateMjState(playerName, info.mj.mjName));
          if (mjName === undefined) {
            store.dispatch(changeMjState(playerName));
          }
          store.dispatch(updateGridState(info.grid));
          store.dispatch(updateLogState(info.log));
          store.dispatch(updateUsersState(info.users));
        }
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

      socket.on('change_trainer_health', (info) => {
        console.log('Retour du serveur: change_trainer_health');
        console.log(info);
        store.dispatch(updateUsersState(info.users));
      });

      socket.on('change_pokemon_health', (info) => {
        console.log('Retour du serveur: change_pokemon_health');
        console.log(info);
        store.dispatch(updateUsersState(info.users));
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
    case CHANGE_TRAINER_HEALTH: {
      console.log('Envoi au serveur: change_trainer_health');
      console.log(action);
      socket.emit('change_trainer_health', (action));
      break;
    }

    case CHANGE_POKEMON_HEALTH: {
      console.log('Envoi au serveur: change_pokemon_health');
      console.log(action);
      socket.emit('change_pokemon_health', (action));
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
