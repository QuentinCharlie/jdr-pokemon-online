import { WS_CONNECT } from 'src/actions/wsConnect';
import { SHARE_SELECTED_TRAINER_AND_POKEMON, addUserTrainerAndPokemonToGrid } from 'src/actions/user';
import { addUserTrainerAndPokemonToUsersState } from 'src/actions/users';

let socket;

/* eslint-disable no-unused-vars, no-console */
const userMiddleware = (store) => (next) => (action) => {
  // let port = document.querySelector('#root').dataset.port; // @change prod
  let port = 3001; // @change dev
  console.log(port);
  // console.log('logMiddleware laisse passer : ', action);

  switch (action.type) {
    case WS_CONNECT:
      // socket = io.connect(`http://54.89.22.26:${port}`);
      // socket = io.connect(`http://localhost:${port}`); // @change prod
      socket = window.io(`http://localhost:${port}`); // @change dev
      // Happened after case SOMETHING
      // receive action from node.js serve
      // then dispatch to state with WS_CONNECT
      socket.on('share_selected_trainer_and_pokemon', (info) => {
        console.log('Retour du serveur: share_selected_trainer_and_pokemon');
        store.dispatch(addUserTrainerAndPokemonToGrid(info));
        store.dispatch(addUserTrainerAndPokemonToUsersState(info));
      });
      break;

    // Happened before WS_CONNECT socket.on(), send action to node.js server
    case SHARE_SELECTED_TRAINER_AND_POKEMON: {
      console.log('Envoi au serveur: share_selected_trainer_and_pokemon');
      socket.emit('share_selected_trainer_and_pokemon', action);
      break;
    }

    default:
      break;
  }

  // On passe au suivant
  next(action);
};

export default userMiddleware;
