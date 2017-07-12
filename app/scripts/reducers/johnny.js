/**
 * @module Reducers/Johnny
 * @desc Johnny Reducer
 */

import R from 'ramda';
import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';

export const johnnyState = {
  buttons: {},
  rehydrated: false,
};

export default {
  johnny: createReducer(johnnyState, {
    [REHYDRATE](state, action) {
      return Object.assign({}, state, action.payload.johnny, {
        rehydrated: true,
      });
    },
    [ActionTypes.JOHNNY_FIVE_BUTTON_PRESS](state, { payload: { pin } }) {
      const buttonState = Object.assign({}, state.buttons[pin], { press: true, hold: false, holdCount: 0 });
      const buttonStateSet = Object.assign({}, state.buttons, { [pin]: buttonState });
      return Object.assign({}, state, { buttons: buttonStateSet });
    },
    [ActionTypes.JOHNNY_FIVE_BUTTON_RELEASE](state, { payload: { pin } }) {
      const buttonState = Object.assign({}, state.buttons[pin], { press: false, hold: false, holdCount: 0 });
      const buttonStateSet = Object.assign({}, state.buttons, { [pin]: buttonState });
      return Object.assign({}, state, { buttons: buttonStateSet });
    },
    [ActionTypes.JOHNNY_FIVE_BUTTON_HOLD](state, { payload: { pin } }) {
      const buttonState = Object.assign({}, (state.buttons[pin]), {
        hold: true, holdCount: (R.pathOr(0, ['buttons', pin, 'holdCount'], state) + 1),
      });
      const buttonStateSet = Object.assign({}, state.buttons, { [pin]: buttonState });
      return Object.assign({}, state, { buttons: buttonStateSet });
    },
  }),
};
