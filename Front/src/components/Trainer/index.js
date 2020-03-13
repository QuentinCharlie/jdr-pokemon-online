/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
} from 'semantic-ui-react';

// == Import files
// import * from 'src/assets/images/trainer/';
import avatar from 'src/assets/images/trainer/1.png';
import heartIcon from 'src/assets/images/heart.svg';
// == Import utils
import { getSidebarNameCapitalize } from 'src/utils/functions';
// == Import components
import TrainerModal from './TrainerModal';

// == Import Styles
import TrainerStyled from './TrainerStyled';

// == Composant
const Trainer = ({ visible, trainer, changeSidebarVisibility }) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../../assets/images/trainer/', false, /\.(gif|png|jpe?g|svg)$/));

  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
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
            trigger={<img className="trainer-avatar-img" src={images['1.png'].default} alt="avatar" />}
            closeIcon
          >
            <TrainerModal trainer={trainer} />
          </Modal>
          <div className="health-container">
            <span>{trainer.vitality}/10</span>
            <img src={heartIcon} alt="heart logo" />
            {/* The style in composant is require for dynamisation */}
            <div className="health-bar" style={{ width: `${trainer.vitality}0%` }} />
          </div>
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
  changeSidebarVisibility: PropTypes.func.isRequired,
};

// == Export
export default Trainer;
