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

// == Import

// == Composant
const TargetsModal = ({ allTargets }) => (
  <TargetModalStyled>
    <Header icon='crosshairs' content='Choissisez la cible' />
    <Modal.Content>
      <div className='target-container'>
        {allTargets.map((target, index) => (
          <div 
            key={`target-${index}`}
            className="target-group"
          >
            <div className="target-trainer">
              <img src={findTrainerImage(`${target.trainer.name}.png`)} alt='avatar dresseur' />  
            </div>
            <div className="target-pokemon">
              <img src={findPokemonImage(`${target.pokemon[0].id}.gif`)} alt='pokemon sprite gif' />
            </div>
          </div>
        ))}
      </div>
    </Modal.Content>
  </TargetModalStyled>
);

TargetsModal.propTypes = {
  allTargets: PropTypes.array.isRequired,
};

// == Export
export default TargetsModal;
