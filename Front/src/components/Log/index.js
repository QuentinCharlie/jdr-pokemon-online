// == Import npm
import React from 'react';

// Styles
import LogStyled from './LogStyled';


// == Composant
const Log = () => (
  <LogStyled>
    <div className="log"></div>
    <div className="current-player"></div>
  </LogStyled>
);

// == Export
export default Log;
