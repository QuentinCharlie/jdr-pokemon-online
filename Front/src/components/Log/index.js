// == Import npm
import React from 'react';

// Styles
import LogStyled from './LogStyled';


// == Composant
const Log = () => (
  <LogStyled>
    <div className="log" />
    <div className="current-player" />
  </LogStyled>
);

// == Export
export default Log;
