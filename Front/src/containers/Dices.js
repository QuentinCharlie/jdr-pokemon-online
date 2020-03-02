import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Dices from 'src/components/Dices';

// Action Creators
import { openDiceList } from 'src/actions/dices';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  isTrainerDicesActive: state.dices.isTrainerDicesActive,
  isPokemonDicesActive: state.dices.isPokemonDicesActive,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  openDiceList: (list) => {
    dispatch(openDiceList(list));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DicesContainer = connect(mapStateToProps, mapDispatchToProps)(Dices);

export default DicesContainer;
