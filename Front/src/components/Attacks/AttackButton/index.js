/* eslint-disable no-unused-vars */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

// == Import style
import AttackButtonStyled from './AttackButtonStyled';

import InfoAttackPopUp from './InfoAttackPopUp';

// == Composant
const AttackButton = ({
  name,
  damage,
  accuracy,
  energy,
  category,
  distance,
  effect,
  type,
}) => (
  <AttackButtonStyled>
    <div className={`button ${type}`}>
      <div className="attack">
        <div className="attack-name">{name}</div>
        <div className="attack-icons">
          <div className={`attack-category ${category}`} />
          <div className={`attack-distance ${distance}`} />
          <Popup
            content={(
              <InfoAttackPopUp
                name={name}
                damage={damage}
                accuracy={accuracy}
                energy={energy}
                category={category}
                distance={distance}
                effect={effect}
                type={type}
              />
            )}
            trigger={<div className="attack-info" />}
            wide="very"
          />
        </div>
      </div>
      <div className="attack-stats">
        <div className="attack-stat">
          <div>Dégats</div>
          <div>{damage}</div>
        </div>
        <div className="attack-stat">
          <div>Précision</div>
          <div>{accuracy}</div>
        </div>
        <div className="attack-stat">
          <div>Energie</div>
          <div>{energy}</div>
        </div>
      </div>
    </div>
  </AttackButtonStyled>
);

// == Validation
AttackButton.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
};

// == Export
export default AttackButton;
