/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal } from 'semantic-ui-react';

import avatar from 'src/components/Trainer/Kojiro_Koharu.jpg';
// == Import style
import TrainerModalStyled from './TrainerModalStyled';

// == Composant
const TrainerModal = () => (
  <TrainerModalStyled>
    <Modal.Header className="modal-header"><h1>Sacha</h1></Modal.Header>
    <Modal.Content className="modal-content">
      <div className="wrapper-left">
        <div className="trainer">
          <div className="trainer-avatar">
            <div className="trainer-avatar-container">
              <img className="modal-trainer-avatar" src={avatar} alt="" />
            </div>
          </div>
          <div className="trainer-description">
            <div className="trainer-description-infos">
              <div className="trainer-description-infos-basics"></div>
              <div className="trainer-description-infos-team"></div>
            </div>
            <div className="trainer-description-appearance"></div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-stat"></div>
          <div className="stats-skills"></div>
        </div>
        <div className="text">
          <div className="text-background"></div>
          <div className="text-history"></div>
          <div className="text-notes"></div>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="spendables">
          <div className="spendables-money"></div>
          <div className="spendables-xp"></div>
        </div>
        <div className="inventory">
          <div className="inventory-nav"></div>
          <div className="inventory-content">
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
          </div>
        </div>
      </div>
    </Modal.Content>
  </TrainerModalStyled>
);

// == Export
export default TrainerModal;
