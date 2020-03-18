import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import TargetsModal from 'src/components/Attacks/AttackButton/TargetsModal';

// Action Creators
import {
  addAttackResultsToLog,
  substractEnergy,
} from 'src/actions/attacks';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  const playerName = state.user.username;
  const mjName = state.mj.mjName;
  const usersKeys = Object.keys(state.users);
  const allUsers = usersKeys.map((userKey) => state.users[userKey]);

  if (playerName === mjName) {
    return ({
      trainer: allUsers[0].trainer,
      pokemon: allUsers[0].pokemon[0],
      isMj: state.user.isMj,
      username: usersKeys[0],
    })
  }
  return ({
    trainer: state.user.trainer,
    username: state.user.username,
    isMj: state.user.isMj,
  })
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  addAttackResultsToLog: (trainer, pokemon, attackName, attackResults) => {
    dispatch(addAttackResultsToLog(trainer, pokemon, attackName, attackResults));
  },
  substractEnergy: (username, pokemon, energy) => {
    dispatch(substractEnergy(username, pokemon, energy));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TargetsModalContainer = connect(mapStateToProps, mapDispatchToProps)(TargetsModal);

export default TargetsModalContainer;
