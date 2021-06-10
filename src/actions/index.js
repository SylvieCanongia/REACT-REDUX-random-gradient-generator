// === action types ===

// store action type into const for auto-completion
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// === action creators

export const randomFirstColor = (newColor) => ({
  type: RANDOM_FIRST_COLOR,
  newColor,
});

export const randomLastColor = (newColor) => ({
  type: RANDOM_LAST_COLOR,
  newColor,
});

export const changeDirection = (value) => ({
  type: CHANGE_DIRECTION,
  value,
});
