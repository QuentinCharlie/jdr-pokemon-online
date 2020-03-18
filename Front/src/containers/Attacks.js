import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Attacks from 'src/components/Attacks';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  const playerName = state.user.username;

  return ({
    attacks: state.users[playerName].pokemon[0].attacks,
    pokemon: state.users[playerName].pokemon[0],
    trainer: state.users[playerName].trainer,
    users: state.users,
    visible: state.sidebar.isAttacksSidebarVisible,
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
const AttacksContainer = connect(mapStateToProps, mapDispatchToProps)(Attacks);

export default AttacksContainer;
