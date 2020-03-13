import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import TrainerSelector from 'src/components/TrainerSelector';

// Action Creators

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  trainers: state.trainer.allTrainers,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const TrainerSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(TrainerSelector);

export default TrainerSelectorContainer;
