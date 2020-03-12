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
import { loadTrainer } from 'src/actions/trainer';
// dispactch la volonté de connecter le WebSocket
store.dispatch(wsConnect());
store.dispatch(loadTrainer());

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
