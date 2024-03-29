import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Trainer from 'src/components/Trainer';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';
import { changeTrainerHealth } from 'src/actions/trainer';


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
      visible: state.sidebar.isTrainerSidebarVisible,
      trainer: allUsers[index].trainer,
      pokemon: allUsers[index].pokemon[0],
      mjTrainerUsername: usersKeys[index],
      isMj: state.user.isMj,
    })
  }
  return ({
    visible: state.sidebar.isTrainerSidebarVisible,
    trainer: state.users[playerName].trainer,
    pokemon: state.users[playerName].pokemon[0],
    isMj: state.user.isMj,
  })
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeSidebarVisibility: (sidebarName, visible) => {
    dispatch(changeSidebarVisibility(sidebarName, visible));
  },
  changeTrainerHealth: (mjTrainerUsername, healthNumber) => {
    dispatch(changeTrainerHealth(mjTrainerUsername, healthNumber));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TrainerContainer = connect(mapStateToProps, mapDispatchToProps)(Trainer);

export default TrainerContainer;
