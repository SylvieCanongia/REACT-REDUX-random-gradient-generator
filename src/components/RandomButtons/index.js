import React from 'react';

import './randomButtons.scss';

const RandomButtons = () => (
  <div className="randomButtons buttons group">
    <button type="button" className="button" id="randFirst">Random First</button>
    <button type="button" className="button" id="randAll">Random All</button>
    <button type="button" className="button" id="randLast">Random Last</button>
  </div>
);

export default RandomButtons;
