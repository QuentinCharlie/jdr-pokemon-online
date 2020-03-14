// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

// == Import style
import TrainerSelectorStyled from './TrainerSelectorStyled';

// == Import Utils
import { findTrainerImage } from 'src/utils/functions';

// == Composant
const TrainerSelector = ({
  trainers,
  loadAllTrainers,
  linkTrainerToUser,
}) => {

  useEffect(() => {
    loadAllTrainers();
  }, []);

  const handleClick = (e)  => {
    const trainerName = e.currentTarget.dataset.name;
    const trainer = trainers.find((trainer) => trainer.name === trainerName);
    linkTrainerToUser(trainer);
  }
  
  return (
    <TrainerSelectorStyled>
      <div className="card-list">
        {trainers !== undefined && 
          <>
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                onClick={handleClick}
                data-name={trainer.name}
                className="card-trainer"
              >
                <Card>
                  <div className="image-container">
                    <img src={findTrainerImage(`${trainer.name}.png`)} />
                  </div>
                  <Card.Content>
                    <Card.Header>{trainer.name}</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <Icon name='thumbtack' />{trainer.background}
                  </Card.Content>
                </Card>
              </div>
            ))}
          </>
        }
      </div>
    </TrainerSelectorStyled>
  );
};


// == Validation
TrainerSelector.propTypes = {
  trainers: PropTypes.array,
  loadAllTrainers: PropTypes.func.isRequired,
  linkTrainerToUser: PropTypes.func.isRequired,
};

TrainerSelector.default = {
  trainers: [],
}

// == Export
export default TrainerSelector;
