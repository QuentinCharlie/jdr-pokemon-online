import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Attacks from 'src/components/Attacks';

// Action Creators
// import { doSomething } from 'src/actions/attacks';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  name: 'Teleport',
  damage: 5,
  accuracy: 5,
  energy: 5,
  category: '5',
  range: '5',
  effect: '5',
  type: '5',
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = () => ({});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AttacksContainer = connect(mapStateToProps, mapDispatchToProps)(Attacks);

export default AttacksContainer;
