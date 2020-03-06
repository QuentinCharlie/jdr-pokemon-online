/* eslint-disable no-console */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import { getSidebarNameCapitalize } from 'src/utils/functions';
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
  visible, 
  changeSidebarVisibility,
}) => {
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  return (
    <AttacksStyled>
      <div className="mobile-tablet">
        <div className="attacks-button" onClick={handleClick} />
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="left"
          visible={visible}
        >
          <div className="attacks-sidebar">boutons des attaques ici</div>
        </Sidebar>
      </div>
      
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
};

Attacks.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};


// == Export
export default Attacks;
