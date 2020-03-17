import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import TargetsModal from 'src/components/Attacks/AttackButton/TargetsModal';

// Action Creators
import { addAttackResultsToLog } from 'src/actions/attacks';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  trainer: state.user.trainer,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  addAttackResultsToLog: (trainer, pokemon, attackName, attackResults) => {
    dispatch(addAttackResultsToLog(trainer, pokemon, attackName, attackResults));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TargetsModalContainer = connect(mapStateToProps, mapDispatchToProps)(TargetsModal);

export default TargetsModalContainer;
