// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ProgressBarStyled from './ProgressBarStyled';

// == Composant
const ProgressBar = ({
  color,
  number,
  maxNumber,
  textColor,
}) => {
  const barWidth = number / maxNumber * 100;
  return (
    <ProgressBarStyled>
      <span style={{ color: textColor }}>{number}</span>
      <div
        className="bar"
        style={{
          width: `${barWidth}%`,
          backgroundColor: color,
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
  textColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  textColor: '#fff',
};

// == Export
export default ProgressBar;
