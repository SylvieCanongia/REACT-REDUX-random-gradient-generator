// container
import { connect } from 'react-redux';

import NbColors from 'src/components/NbColors';

// Read informations into the state
// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    nbColors: state.nbColors,
  };
};

// No need to dispatch actions towards store here (so no state update).
const mapDispatchToProps = {};

// connect returns a function that create the assistant. Params = props filling plan
const createContainer = connect(mapStateToProps, mapDispatchToProps);

// Applying this function on presentation component to create the assistant
const containerComponent = createContainer(NbColors);

export default containerComponent;
