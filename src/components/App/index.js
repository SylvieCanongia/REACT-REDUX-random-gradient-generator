// == Import npm
import React from 'react';
// import NbColors from 'src/components/NbColors';
import NbColorsContainer from 'src/containers/NbColors';
import RandomButtons from 'src/containers/RandomButtons';
import Gradient from 'src/containers/Gradient';
import Directions from 'src/containers/Directions';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <NbColorsContainer />
    <RandomButtons />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
