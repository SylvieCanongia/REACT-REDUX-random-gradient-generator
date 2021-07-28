import { connect } from 'react-redux';

// presentation component import
import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => ({
  direction: state.direction,
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

const mapDispatchToProps = (dispatch) => ({
});

// === assistant creation
export default connect(mapStateToProps, mapDispatchToProps)(Gradient);
