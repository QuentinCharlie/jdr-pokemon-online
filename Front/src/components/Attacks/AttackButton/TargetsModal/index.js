// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';

// == Import utils
import {
  findPokemonImage,
  findTrainerImage,
} from 'src/utils/functions';

// == Import style
import TargetsModalStyled from './TargetsModalStyled';

// == Import utils
import { damageCalc } from 'src/utils/attacks';

// == Composant
const TargetsModal = ({
  allTargets,
  trainer,
  pokemon,
  username,
  name,
  type,
  damage,
  accuracy,
  energy,
  category,
  distance,
  addAttackResultsToLog,
  substractEnergy,
  isMj,
 }) => {
  const closeModal = () => {
    document.body.querySelector('.modal-attack-targets').closest('.page').classList.remove('active', 'visible');
  };
  const handleTrainerClick = (e) => {
    // console.log(damageCalc(pokemon, attack, target));
    closeModal();
    const trainerNameTarget = e.currentTarget.dataset.trainer;
    const attack = {name, type, damage, accuracy, energy, category, distance};
    allTargets.find((target) => {
      if (target.trainer.name === trainerNameTarget) {
        const targetObject = {
          target: target.trainer,
        }
        //  console.log(damageCalc(pokemon, attack, targetObject));
        const attackResults = damageCalc(pokemon, attack, targetObject);
        addAttackResultsToLog(trainer, pokemon, attack.name, attackResults);
        substractEnergy(username, pokemon, energy);
      }    
    });
  }
  const handlePokemonClick = (e) => {
    closeModal();
    const pokemonNameTarget = e.currentTarget.dataset.pokemon;
    const attack = {name, type, damage, accuracy, energy, category, distance};
    allTargets.find((target) => {
      if (target.pokemon[0].name === pokemonNameTarget) {
        const targetObject = {
          target: target.pokemon[0],
          trainer: target.trainer,
        }
        // console.log(damageCalc(pokemon, attack, targetObject));
        const attackResults = damageCalc(pokemon, attack, targetObject);
        addAttackResultsToLog(trainer, pokemon, attack.name, attackResults);
        substractEnergy(username, pokemon, energy);
      }      
    });
  }
  return (
    <TargetsModalStyled>
      <Header icon='crosshairs' content='Choissisez la cible' />
      <Modal.Content>
        <div className='target-container'>
          {allTargets.map((target, index) => (
            <div 
              key={`target-${index}`}
              className="target-group"
            >
              <div className="target-trainer"
                onClick={handleTrainerClick}
                data-trainer={target.trainer.name}
              >
                <img 
                  src={findTrainerImage(`${target.trainer.name}.png`)}
                  alt='avatar dresseur'
                />  
              </div>
              <div className="target-pokemon"
                onClick={handlePokemonClick}
                data-trainer={target.trainer.name}
                data-pokemon={target.pokemon[0].name}
              >
                <img 
                  src={findPokemonImage(`${target.pokemon[0].id}.gif`)}
                  alt='pokemon sprite gif' 
                />
              </div>
            </div>
          ))}
        </div>
      </Modal.Content>
    </TargetsModalStyled>
  );
};

TargetsModal.propTypes = {
  allTargets: PropTypes.array.isRequired,
  pokemon: PropTypes.object.isRequired,
  trainer: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  addAttackResultsToLog: PropTypes.func.isRequired,
  substractEnergy: PropTypes.func.isRequired,
  isMj: PropTypes.bool.isRequired,
};

// == Export
export default TargetsModal;
