import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import PokemonSelector from 'src/components/PokemonSelector';

// Action Creators
import { loadAllPokemons } from 'src/actions/pokemon';
import {
  linkPokemonToUser,
  shareSelectedTrainerAndPokemonToUsers
} from 'src/actions/user';
// import { loadPokemonInGrid } from 'src/actions/grid';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  username: state.user.username,
  trainer: state.user.trainer,
  pokemons: state.pokemon.starterPokemons,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  loadAllPokemons: () => {
    dispatch(loadAllPokemons());
  },
  linkPokemonToUser: (pokemon) => {
    dispatch(linkPokemonToUser(pokemon));
  },
  shareSelectedTrainerAndPokemonToUsers: (trainer, pokemon, username) => {
    dispatch(shareSelectedTrainerAndPokemonToUsers(trainer, pokemon, username));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PokemonSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonSelector);

export default PokemonSelectorContainer;
