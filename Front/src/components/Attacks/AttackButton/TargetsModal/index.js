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
import TargetModalStyled from './TargetModalStyled';

// == Import utils
import { damageCalc } from 'src/utils/attacks';

// == Composant
const TargetsModal = ({
  allTargets,
  pokemon,
  name,
  type,
  damage,
  accuracy,
  energy,
  category,
  distance,
 }) => {
 
  const handleTrainerClick = (e) => {
    // console.log(damageCalc(pokemon, attack, target));
    const trainerNameTarget = e.currentTarget.dataset.trainer;
    const attack = {name, type, damage, accuracy, energy, category, distance};
    allTargets.find((target) => {
      if (target.trainer.name === trainerNameTarget) {
        const targetObject = {
          target: target.trainer,
        }
       console.log(damageCalc(pokemon, attack, targetObject));
      }      
    });

  }
  const handlePokemonClick = (e) => {
    const pokemonNameTarget = e.currentTarget.dataset.pokemon;
    const attack = {name, type, damage, accuracy, energy, category, distance};
    allTargets.find((target) => {
      if (target.pokemon[0].name === pokemonNameTarget) {
        const targetObject = {
          target: target.pokemon[0],
          trainer: target.trainer,
        }
        console.log(damageCalc(pokemon, attack, targetObject));
      }      
    });
  }
  return (
    <TargetModalStyled>
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
    </TargetModalStyled>
  );
};

TargetsModal.propTypes = {
  allTargets: PropTypes.array.isRequired,
  pokemon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
};

// == Export
export default TargetsModal;
