import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Grid from 'src/components/Board/Grid';

// Action Creators
import { movePokemon, changeDragOverCell } from 'src/actions/grid';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  trainer: state.user.trainer,
  pokemon: state.user.pokemon,
  pokemons: state.pokemon.allPokemons,
  grid: state.grid,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  movePokemon: (trainerName, pokemonName, X, Y) => {
    dispatch(movePokemon(trainerName, pokemonName, X, Y));
  },
  changeDragOverCell: (X, Y) => {
    dispatch(changeDragOverCell(X, Y));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default GridContainer;
