import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Pokemon from 'src/components/Pokemon';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';
import { changePokemonHealth } from 'src/actions/pokemon';

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
      pokemonMaxHealth: state.pokemon.allPokemons[allUsers[index].pokemon[0].id - 1].vitality,
      mjTrainerUsername: usersKeys[index],
      pokemon: allUsers[index].pokemon[0],
      isMj: state.user.isMj,
    })
  }
  return ({
    visible: state.sidebar.isPokemonSidebarVisible,
    pokemon: state.users[playerName].pokemon[0],
    pokemonMaxHealth: state.pokemon.allPokemons[state.user.pokemon.id - 1].vitality,
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
  changePokemonHealth: (mjTrainerUsername, healthNumber) => {
    dispatch(changePokemonHealth(mjTrainerUsername, healthNumber));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(Pokemon);

export default PokemonContainer;
