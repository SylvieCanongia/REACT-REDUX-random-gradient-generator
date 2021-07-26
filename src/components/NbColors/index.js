import React from 'react';
import PropTypes from 'prop-types';

import './nbColors.scss';

const NbColors = ({ nbColors }) => (
  <div className="nbColors">{nbColors} couleur(s) générée(s)</div>
);

NbColors.propTypes = {
  nbColors: PropTypes.number.isRequired,
};

export default NbColors;
