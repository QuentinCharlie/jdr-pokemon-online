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
  attacks,
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
        {attacks.map((attack) => (
          <AttackButton
            // eslint-disable-next-line react/no-array-index-key
            key={attack.id}
            name={attack.name}
            energy={attack.energy}
            category={attack.category}
            distance={attack.distance}
            accuracy={attack.accuracy}
            damage={attack.damage}
            effect={attack.effect}
            type={attack.type.name}
            color={attack.type.color}
          />
        ))}
      </div>
    </AttacksStyled>
  );
};

Attacks.propTypes = {
  attacks: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};


// == Export
export default Attacks;
