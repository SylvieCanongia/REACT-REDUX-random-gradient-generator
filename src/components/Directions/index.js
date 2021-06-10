import React from 'react';

import './directions.scss';

const Directions = () => (
  <div id="direction" className=" direction buttons group">
    <button type="button" className="button" id="toLeft">to left</button>
    <button type="button" className="button" id="toRight">to right</button>
  </div>
);
export default Directions;
