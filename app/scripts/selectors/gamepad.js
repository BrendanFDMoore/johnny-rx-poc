import { createSelector, createStructuredSelector } from 'reselect';
import { propOr } from 'ramda';
import { selectButtonStates } from './johnny';

const DEFAULT_BUTTON_STATE = {
  press: false,
  hold: false,
  holdCount: 0,
};

const selectButtonA = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '9')
);

const selectButtonB = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '8')
);

const selectButtonStart = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '7')
);

const selectButtonSelect = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '6')
);

const selectButtonUp = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '4')
);

const selectButtonDown = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '3')
);

const selectButtonLeft = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '2')
);

const selectButtonRight = createSelector(
  selectButtonStates,
  propOr(DEFAULT_BUTTON_STATE, '5')
);

const gamepadStoreConnector = createStructuredSelector({
  A: selectButtonA,
  B: selectButtonB,
  Select: selectButtonSelect,
  Start: selectButtonStart,
  Up: selectButtonUp,
  Down: selectButtonDown,
  Left: selectButtonLeft,
  Right: selectButtonRight,
});

export default gamepadStoreConnector;
