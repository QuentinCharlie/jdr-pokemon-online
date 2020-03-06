/* eslint-disable no-console */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import AttackButton from 'src/components/Attacks/AttackButton';

// Styles
import AttacksStyled from './AttacksStyled';

// == Composant
const Attacks = ({
  name,
  damage,
  accuracy,
  energy,
  category,
  distance,
  effect,
  type,
}) => (
  <AttacksStyled>
    <div className="mobile-tablet"></div>
    
    <div className="desktop">
      <AttackButton
        name={name}
        damage={damage}
        accuracy={accuracy}
        energy={energy}
        category={category}
        distance={distance}
        effect={effect}
        type={type}
      />
      <AttackButton
        name={name}
        damage={damage}
        accuracy={accuracy}
        energy={energy}
        category={category}
        distance={distance}
        effect={effect}
        type={type}
      />
      <AttackButton
        name={name}
        damage={damage}
        accuracy={accuracy}
        energy={energy}
        category={category}
        distance={distance}
        effect={effect}
        type={type}
      />
      <AttackButton
        name={name}
        damage={damage}
        accuracy={accuracy}
        energy={energy}
        category={category}
        distance={distance}
        effect={effect}
        type={type}
      />
    </div>
  </AttacksStyled>
);

Attacks.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


// == Export
export default Attacks;
