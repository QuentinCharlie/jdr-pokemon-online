import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Demo from 'src/components/Demo';

// Action Creators
import { doSomething } from 'src/actions/demo';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  message: state.message,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  doAction: () => {
    dispatch(doSomething('Hello'));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default DemoContainer;
