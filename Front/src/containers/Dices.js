import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Dices from 'src/components/Dices';

// Action Creators
import { openDiceList } from 'src/actions/dices';
import { changeSidebarVisibility } from 'src/actions/sidebar';
import { addDiceRollsToLog } from 'src/actions/dices';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  const playerName = state.user.username;

  return ({
    isTrainerDicesActive: state.dices.isTrainerDicesActive,
    isPokemonDicesActive: state.dices.isPokemonDicesActive,
    visible: state.sidebar.isDicesSidebarVisible,
    trainer: state.users[playerName].trainer,
    pokemon: state.users[playerName].pokemon[0],
  });
}

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  openDiceList: (list) => {
    dispatch(openDiceList(list));
  },
  changeSidebarVisibility: (sidebarName, visible) => {
    dispatch(changeSidebarVisibility(sidebarName, visible));
  },
  addDiceRollsToLog: (roller, skill, diceRolls) => {
    dispatch(addDiceRollsToLog(roller, skill, diceRolls));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DicesContainer = connect(mapStateToProps, mapDispatchToProps)(Dices);

export default DicesContainer;
