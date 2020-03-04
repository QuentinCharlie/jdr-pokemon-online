// == Import npm
import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';


// == Import files
import avatar from './Kojiro_Koharu.jpg';
// Styles
import TrainerStyled from './TrainerStyled';


// == Composant
const Trainer = () => (
  <TrainerStyled>
    <div className="trainer-avatar">
      <Modal
        closeIcon
        style={{ width: '95vw', margin: 'auto' }}
        trigger={<img src={avatar} alt="avatar" />}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={avatar} />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      <div className="health-container">
        <span>40/100</span>
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
