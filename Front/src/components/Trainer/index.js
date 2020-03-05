/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal } from 'semantic-ui-react';

// == Import files
import avatar from 'src/assets/images/ash.png';
// == Import components
import TrainerModal from './TrainerModal';
// == Import Styles
import TrainerStyled from './TrainerStyled';

// == Composant
const Trainer = () => (
  <TrainerStyled>
    <div className="trainer-avatar">
      <Modal
        className="modal-trainer"
        style={{ width: '95vw', height: '90vh', margin: '4vh auto' }}
        trigger={<img className="trainer-avatar-img" src={avatar} alt="avatar" />}
        closeIcon
      >
        <TrainerModal />
      </Modal>
      <div className="health-container">
        <span>40/100</span>
        {/* The style in composant is require for dynamisation */}
        <div className="health-bar" style={{ width: '40%' }} />
      </div>
    </div>
    <div className="money">
      <span>5000 ₽</span>
    </div>
  </TrainerStyled>
);

// == Export
export default Trainer;
