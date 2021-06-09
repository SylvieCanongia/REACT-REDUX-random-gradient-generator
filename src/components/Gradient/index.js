import React from 'react';

import './gradient.scss';

const Gradient = () => (
  <>
    <div id="colors">
      <span className="colors__first">First color</span>
      <span className="colors__arrow">-&gt;</span>
      <span className="colors__last">Last color</span>
    </div>
    <div id="gradient">Gradient</div>
  </>
);

export default Gradient;
