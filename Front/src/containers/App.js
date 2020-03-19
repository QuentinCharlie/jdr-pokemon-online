import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import App from 'src/components/App';

// Action Creators
// import {  } from 'src/actions/app';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  function isNotEmpty(obj) {
    return Object.keys(obj).length > 0;
  }
  return ({
    hasTrainer: state.user.hasTrainer,
    hasPokemon: state.user.hasPokemon,
    isUserReady: state.user.isUserReady,
    isUsersNotEmpty: isNotEmpty(state.users),
  });
}

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
