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
  skewNumber,
  skewBar,
}) => {
  const barWidth = number / maxNumber * 100;
  return (
    <ProgressBarStyled>
      <span className={skewNumber ? 'skew-number' : 'hidden'} />
      <span
        style={{
          color: textColor,
        }}
      >
        {number}
      </span>
      <div
        className="bar"
        style={{
          width: `${barWidth}%`,
          backgroundColor: color,
        }}
      >
        <span className={skewBar ? 'skew-bar' : 'hidden'} />
      </div>
    </ProgressBarStyled>
  );
};

// == Validation
ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
  textColor: PropTypes.string,
  skewNumber: PropTypes.bool,
  skewBar: PropTypes.bool,
};

ProgressBar.defaultProps = {
  textColor: '#fff',
  skewNumber: false,
  skewBar: false,
};

// == Export
export default ProgressBar;
