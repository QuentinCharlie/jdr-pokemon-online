import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Nav from 'src/components/Nav';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';
import { mjChangeTrainer } from 'src/actions/mj';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
  const usersKeys = Object.keys(state.users);
  const allUsers = usersKeys.map((userKey) => state.users[userKey]);
  return ({
    visible: state.sidebar.isNavSidebarVisible,
    users: allUsers,
    isMj: state.user.isMj,
  });
}

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeSidebarVisibility: (sidebarName, visible) => {
    dispatch(changeSidebarVisibility(sidebarName, visible));
  },
  mjChangeTrainer: (trainerName, users) => {
    dispatch(mjChangeTrainer(trainerName, users));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
