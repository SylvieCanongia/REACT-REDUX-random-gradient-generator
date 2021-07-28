import React from 'react';
import PropTypes from 'prop-types';

import './randomButtons.scss';

const RandomButtons = ({ randomColorFirst, randomColorLast }) => (
  <div className="randomButtons buttons group">
    <button
      type="button"
      className="button"
      id="randFirst"
      onClick={() => {
        randomColorFirst();
      }}
    >
      Random First
    </button>
    <button
      type="button"
      className="button"
      id="randAll"
      onClick={() => {
        randomColorFirst();
        randomColorLast();
      }}
    >
      Random All
    </button>
    <button
      type="button"
      className="button"
      id="randLast"
      onClick={() => {
        randomColorLast();
      }}
    >
      Random Last
    </button>
  </div>
);

RandomButtons.propTypes = {
  randomColorFirst: PropTypes.func.isRequired,
  randomColorLast: PropTypes.func.isRequired,
};

export default RandomButtons;
