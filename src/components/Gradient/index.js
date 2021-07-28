import React from 'react';
import PropTypes from 'prop-types';

import './gradient.scss';

const Gradient = ({ direction, firstColor, lastColor }) => {
  const gradient = `linear-gradient(${direction},${firstColor},${lastColor})`;

  return (
    <>
      <div id="colors">
        <span className="colors__first" style={{ color: firstColor }}>{ firstColor }</span>
        <span className="colors__arrow" style={{ transform: `rotate(calc(${direction} - 90deg))` }}>→</span>
        <span className="colors__last" style={{ color: lastColor }}>{ lastColor }</span>
      </div>
      <div id="gradient" style={{ background: gradient }} />
    </>
  );
};

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};
export default Gradient;
