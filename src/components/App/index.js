// == Import npm
import React from 'react';
import NbColors from 'src/components/NbColors';
import RandomButtons from 'src/components/RandomButtons';
import Gradient from 'src/components/Gradient';
import Directions from 'src/components/Directions';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <RandomButtons />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
