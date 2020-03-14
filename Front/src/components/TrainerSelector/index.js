// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

// == Import Utils
import { findTrainerImage } from 'src/utils/functions';

// == Import Components
import PokeballSpinner from 'src/components/PokemonSelector/PokeballSpinner';

// == Import style
import TrainerSelectorStyled from './TrainerSelectorStyled';

// == Composant
const TrainerSelector = ({
  trainers,
  loadAllTrainers,
  linkTrainerToUser,
}) => {
  useEffect(() => {
    loadAllTrainers();
  }, []);

  const handleClick = (e) => {
    const trainerName = e.currentTarget.dataset.name;
    const trainerSelected = trainers.find((trainer) => trainer.name === trainerName);
    linkTrainerToUser(trainerSelected);
  };

  return (
    <TrainerSelectorStyled>
      {trainers.length === 0 && (
        <div className="loading">
          <PokeballSpinner />
        </div>
      )}
      {trainers.length > 0 && (
        <div className="card-list">
          <div className="selection-header">
            Choisis ton dresseur !
          </div>
          <Card.Group
            itemsPerRow={3}
            centered
            stackable
          >
            {trainers.map((trainer) => (
              <Card
                key={trainer.id}
                onClick={handleClick}
                data-name={trainer.name}
                className="card-trainer"
              >
                <div className="image-container">
                  <img src={findTrainerImage(`${trainer.name}.png`)} alt="trainer avatar" />
                </div>
                <Card.Content>
                  <Card.Header>{trainer.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="background-container">
                    <Icon name="thumbtack" />{trainer.background}
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      )}
    </TrainerSelectorStyled>
  );
};


// == Validation
TrainerSelector.propTypes = {
  trainers: PropTypes.array,
  loadAllTrainers: PropTypes.func.isRequired,
  linkTrainerToUser: PropTypes.func.isRequired,
};

TrainerSelector.defaultProps = {
  trainers: [],
};

// == Export
export default TrainerSelector;
