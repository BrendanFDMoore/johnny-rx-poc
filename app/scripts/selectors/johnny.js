import { createSelector } from 'reselect';
import { propOr } from 'ramda';

const selectBoardState = propOr({}, 'johnny');

export const selectButtonStates = createSelector(
  selectBoardState,
  propOr({}, 'buttons')
);
