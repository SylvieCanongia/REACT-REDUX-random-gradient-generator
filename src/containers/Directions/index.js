import { connect } from 'react-redux';

import { changeDirection } from 'src/actions';

// presentation component import
import Directions from 'src/components/Directions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeDirection: (value) => {
    const action = changeDirection(value);
    dispatch(action);
  },
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Directions);
