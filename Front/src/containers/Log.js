import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Log from 'src/components/Log';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  const playerName = state.user.username;
  const mjName = state.mj.mjName;
  const usersKeys = Object.keys(state.users);
  const allUsers = usersKeys.map((userKey) => state.users[userKey]);
  const index = state.mj.mjTrainerIndex;

  if (playerName === mjName) {
    return ({
      visible: state.sidebar.isLogSidebarVisible,
      entries: state.log.entries,
      pokemon: allUsers[index].pokemon[0],
    });
  }
  return ({
    visible: state.sidebar.isLogSidebarVisible,
    entries: state.log.entries,
    pokemon: state.user.pokemon,
  })
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeSidebarVisibility: (sidebarName, visible) => {
    dispatch(changeSidebarVisibility(sidebarName, visible));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const LogContainer = connect(mapStateToProps, mapDispatchToProps)(Log);

export default LogContainer;
