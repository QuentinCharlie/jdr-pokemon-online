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
import avatar from 'src/assets/images/red.jpg';
// == Import components
import TrainerModal from './TrainerModal';

import { getSidebarNameCapitalize } from 'src/utils/functions';
// == Import Styles
import TrainerStyled from './TrainerStyled';

// == Composant
const Trainer = ({ visible, changeSidebarVisibility }) => {
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
      </div>
    </TrainerStyled>
  );
};

Trainer.propTypes = {
  visible: PropTypes.bool.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

// == Export
export default Trainer;
