// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ProgressBarStyled from './ProgressBarStyled';

// == Composant
const ProgressBar = ({ color, number, maxNumber }) => {
  const barWidth = number / maxNumber * 100;
  return (
    <ProgressBarStyled>
      <span>{number}</span>
      <div
        className="bar"
        style={{
          width: `${barWidth}%`,
          'background-color': color,
        }}
      />
    </ProgressBarStyled>
  );
};

// == Validation
ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
