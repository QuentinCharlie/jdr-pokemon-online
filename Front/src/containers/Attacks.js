import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Attacks from 'src/components/Attacks';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  attacks: [
    {
      name: 'Éclair',
      damage: 40,
      accuracy: '100%',
      energy: 1,
      category: 'special',
      distance: 'rayon',
      effect: 'Sur 10, paralyse la cible',
      type: 'Electrik',
      color: '#ffbb33',
    },
    {
      name: 'Vive-Attaque',
      damage: 40,
      accuracy: '100%',
      energy: 1,
      category: 'physical',
      distance: 'rayon',
      effect: 'Initiative +10',
      type: 'Normal',
      color: '#bbaabb',
    },
    {
      name: 'Mimi-Queue',
      damage: 0,
      accuracy: '100%',
      energy: 1,
      category: 'statut',
      distance: 'cible',
      effect: 'END-1 jusqu\'à la fin du combat ou au rappel du Pokemon adversaire',
      type: 'Normal',
      color: '#bbaabb',
    },
    {
      name: 'Rugissement',
      damage: 0,
      accuracy: '100%',
      energy: 1,
      category: 'statut',
      distance: 'cible',
      effect: 'FOR-1 jusqu\'à la fin du combat ou au rappel du pokemon adversaire',
      type: 'Normal',
      color: '#bbaabb',
    },
  ],
  visible: state.sidebar.isAttacksSidebarVisible,
});

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
