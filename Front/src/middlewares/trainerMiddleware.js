// == Import
import axios from 'axios';
import { LOAD_TRAINER, saveTrainer } from 'src/actions/trainer';

const trainerMiddleware = (store) => (next) => (action) => {
  const trainerId = 1;
  switch (action.type) {
    case LOAD_TRAINER:
      axios({
        method: 'GET',
        url: `http://54.89.22.26/api/trainer/${trainerId}`,
      })
      .then((response) => {
        console.log(response.data);
        store.dispatch(saveTrainer(response.data));       
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

export default trainerMiddleware;
