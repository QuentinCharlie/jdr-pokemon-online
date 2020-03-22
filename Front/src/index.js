// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import App from 'src/containers/App';
import store from 'src/store';

// action creator pour la connexion au WebSocket
import { wsConnect } from 'src/actions/wsConnect';
// import des data de l'API
import { loadUser, loadState } from 'src/actions/user';
import { changeMjState } from 'src/actions/mj';
import { loadAllPokemons } from 'src/actions/pokemon';
import { loadAllTrainers } from 'src/actions/trainer';
// dispactch la volonté de connecter le WebSocket
store.dispatch(loadAllTrainers());
store.dispatch(loadAllPokemons());
store.dispatch(wsConnect());
store.dispatch(loadUser());
const playerName = store.getState().user.username;
const mjName = store.getState().mj.mjName;
console.log('BEFORE INDEX IFFFFFFFFFFFFFFFFFFFFF');
console.log(playerName);
console.log(mjName);
if (mjName === undefined) {
  console.log('INDEX IFFFFFFFFFFFFFFFFFFFFF');
  store.dispatch(changeMjState(playerName));
}
store.dispatch(loadState());

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
