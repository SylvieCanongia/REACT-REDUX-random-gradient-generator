import React from 'react';
import PropTypes from 'prop-types';

import './directions.scss';

const Directions = ({ changeDirection }) => (
  <div id="direction" className=" direction buttons group">
    <button
      type="button"
      className="button"
      id="toLeft"
      onClick={() => {
        changeDirection(('270deg'));
      }}
    >
      to left
    </button>
    <button
      type="button"
      className="button"
      id="toRight"
      onClick={() => {
        changeDirection('90deg');
      }}
    >
      to right
    </button>
  </div>
);

Directions.propTypes = {
  changeDirection: PropTypes.func.isRequired,
};

export default Directions;
