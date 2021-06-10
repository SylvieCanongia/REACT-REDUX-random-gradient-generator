import React from 'react';

import './gradient.scss';

const Gradient = () => {
  const direction = '90deg';
  const firstColor = 'orange';
  const lastColor = '#f0f';
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

export default Gradient;
