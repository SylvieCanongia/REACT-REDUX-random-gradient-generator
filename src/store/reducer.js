import {
  RANDOM_FIRST_COLOR,
  RANDOM_LAST_COLOR,
  CHANGE_DIRECTION,
} from '../actions';

const inititalState = {
  firstColor: 'hsl(33, 92%, 52%)',
  lastColor: 'hsl(300, 100%, 50%)',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = inititalState, action = {}) {
  switch (action.type) {
    case RANDOM_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.newColor,
      };

    case RANDOM_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.newColor,
      };

    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.value,
      };

    default:
      return state;
  }
}

export default reducer;
