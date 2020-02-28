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
  range,
  effect,
  type,
}) => (
  <AttacksStyled>
    <AttackButton
      name={name}
      damage={damage}
      accuracy={accuracy}
      energy={energy}
      category={category}
      range={range}
      effect={effect}
      type={type}
    />
    <AttackButton
      name={name}
      damage={damage}
      accuracy={accuracy}
      energy={energy}
      category={category}
      range={range}
      effect={effect}
      type={type}
    />
    <AttackButton
      name={name}
      damage={damage}
      accuracy={accuracy}
      energy={energy}
      category={category}
      range={range}
      effect={effect}
      type={type}
    />
    <AttackButton
      name={name}
      damage={damage}
      accuracy={accuracy}
      energy={energy}
      category={category}
      range={range}
      effect={effect}
      type={type}
    />
  </AttacksStyled>
);

Attacks.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};


// == Export
export default Attacks;
