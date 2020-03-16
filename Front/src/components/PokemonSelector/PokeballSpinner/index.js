// == Import npm
import React from 'react';

import pokeball from 'src/assets/images/pokeball-bounce.gif';

// == Import style
import PokeballSpinnerStyled from './PokeballSpinnerStyled';

// == Composant
const PokeballSpinner = () => (
  <PokeballSpinnerStyled>
      <img className="pokeball-gif" src={pokeball} alt=""/>
  </PokeballSpinnerStyled>
);

// == Export
export default PokeballSpinner;
