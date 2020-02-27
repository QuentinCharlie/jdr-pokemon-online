// == Import npm
import React from 'react';

// == Import files
import avatar from './Kojiro_Koharu.jpg';
// Styles
import TrainerStyled from './TrainerStyled';


// == Composant
const Trainer = () => (
  <TrainerStyled>
    <div className="trainer-avatar">
      <img src={avatar} alt="avatar" />
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
