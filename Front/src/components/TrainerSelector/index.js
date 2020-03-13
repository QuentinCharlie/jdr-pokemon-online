// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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

  const handleClick = (e)  => {
    const trainerName = e.target.dataset.name;
    const trainer = trainers.find((trainer) => trainer.name === trainerName);
    linkTrainerToUser(trainer);
  }
  
  return (
    <TrainerSelectorStyled>
    {trainers !== undefined && 
      <>
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            onClick={handleClick}
            data-name={trainer.name}
          >
            {trainer.name}
          </div>
        ))}
      </>
    }
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
