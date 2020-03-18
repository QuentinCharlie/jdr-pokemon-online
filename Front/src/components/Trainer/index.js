/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
  Dropdown,
} from 'semantic-ui-react';

// == Import files
import heartIcon from 'src/assets/images/heart.svg';
// == Import utils
import { getSidebarNameCapitalize, findTrainerImage } from 'src/utils/functions';
// == Import components
import TrainerModal from './TrainerModal';

// == Import Styles
import TrainerStyled from './TrainerStyled';

// == Composant
const Trainer = ({
  visible,
  trainer,
  pokemon,
  changeSidebarVisibility,
  isMj,
  changeTrainerHealth,
  mjTrainerUsername
}) => { 
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  let options = [];
  for (let i = 0 ; i <= 10; i++){
    options.push({ key: i, text: `${i}`, value: i });
  };

  const handleOptionClick = (e) => {
    const healthNumber = e.target.dataset.value;
    console.log(mjTrainerUsername);
    console.log(healthNumber);
    changeTrainerHealth(mjTrainerUsername, Number(healthNumber));
  };
  return (
    <TrainerStyled>
      <div className="mobile-tablet">
        <div className="trainer-button" onClick={handleClick} />
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="left"
          visible={visible}
        >
          <div className="trainer-sidebar">fiche dresseur ici</div>
        </Sidebar>
      </div>

      <div className="desktop">
        <div className="trainer-avatar">
          <Modal
            className="modal-trainer"
            style={{ width: '95vw', height: '90vh', margin: '4vh auto' }}
            trigger={<img className="trainer-avatar-img" src={findTrainerImage(`${trainer.name}.png`)} alt="avatar" />}
            closeIcon
          >
            <TrainerModal trainer={trainer} pokemon={pokemon} />
          </Modal>
          {isMj && 
            <div className="health-container">
              <Dropdown
                  className="span"
                  upward
                  icon={null}
                  scrolling
                  trigger={
                    <span style={{ cursor: 'pointer' }}>
                      {trainer.vitality}/10
                    </span>
                  }
                >
                <Dropdown.Menu >
                  {options.map((option) => (
                    <Dropdown.Item 
                      key={`trainer-option-key-${option.key}`}
                      onClick={handleOptionClick}
                      data-value={option.value}
                    >
                      {option.text}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <img src={heartIcon} alt="heart logo" />
              {/* The style in composant is require for dynamisation */}
              <div className={(trainer.vitality === 10) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${trainer.vitality}0%` }} />
            </div>
          }
          {!isMj &&
            <div className="health-container">
              <span>{trainer.vitality}/10</span>
              <img src={heartIcon} alt="heart logo" />
              {/* The style in composant is require for dynamisation */}
              <div className={(trainer.vitality === 10) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${trainer.vitality}0%` }} />
            </div>
          }
        </div>
        <div className="money">
          <span>{trainer.money} ₽</span>
        </div>
      </div>
    </TrainerStyled>
  );
};

Trainer.propTypes = {
  visible: PropTypes.bool.isRequired,
  trainer: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  isMj: PropTypes.bool.isRequired,
  changeTrainerHealth: PropTypes.func.isRequired,
  mjTrainerUsername: PropTypes.string,
};


Trainer.defaultProps = {
  mjTrainerUsername: '',
}
// == Export
export default Trainer;
