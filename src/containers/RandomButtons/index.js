import { connect } from 'react-redux';

import { randomFirstColor, randomLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';

import RandomButtons from 'src/components/RandomButtons';

// Read informations into the state
const mapStateToProps = (state) => ({
});

// Dispatch actions
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    randomColorFirst: () => {
      const action = randomFirstColor(randomHexColor());
      dispatch(action);
    },
    randomColorLast: () => {
      const action = randomLastColor(randomHexColor());
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomButtons);
