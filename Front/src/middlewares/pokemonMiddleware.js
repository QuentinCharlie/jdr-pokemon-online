// == Import
import axios from 'axios';
import { LOAD_ALL_POKEMONS, displayAllPokemons } from 'src/actions/pokemon';

const pokemonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ALL_POKEMONS:
      axios({
        method: 'GET',
        url: 'http://54.89.22.26/api/pokemons',
      })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(displayAllPokemons(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      break;
  }
  next(action);
};

export default pokemonMiddleware;
