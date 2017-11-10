/**
 * @module Reducers/Johnny
 * @desc Johnny Reducer
 */

import R from 'ramda';
import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';

export const shootyState = {
  target: null,
  started: false,
  // startTime: null,
  redScore: 0,
  greenScore: 0,
  rehydrated: false,
};

const HIT_SCORE = +5;
const MISS_SCORE = -2;

export default {
  shooty: createReducer(shootyState, {
    // [REHYDRATE](state, action) {
    //   return Object.assign({}, state, action.payload.shooty, {
    //     rehydrated: true,
    //   });
    // },
    [ActionTypes.SHOOTY_LASERS_START_GAME](state, action) {
      return Object.assign({}, state, {
        started: true,
        // startTime: new Date(),
        redScore: 0,
        greenScore: 0,
        target: null,
      });
    },
    [ActionTypes.SHOOTY_LASERS_STOP_GAME](state, action) {
      return Object.assign({}, state, {
        started: false,
        target: null,
      });
    },
    [ActionTypes.SHOOTY_LASERS_RED_TARGET](state, action) {
      return Object.assign({}, state, {
        target: 'red',
      });
    },
    [ActionTypes.SHOOTY_LASERS_GREEN_TARGET](state, action) {
      return Object.assign({}, state, {
        target: 'green',
      });
    },
    [ActionTypes.SHOOTY_LASERS_RED_HIT](state, action) {
      return Object.assign({}, state, {
        target: null,
        redScore: state.redScore + HIT_SCORE,
      });
    },
    [ActionTypes.SHOOTY_LASERS_RED_MISS](state, action) {
      return Object.assign({}, state, {
        target: null,
        redScore: state.redScore + MISS_SCORE,
      });
    },
    [ActionTypes.SHOOTY_LASERS_GREEN_HIT](state, action) {
      return Object.assign({}, state, {
        target: null,
        greenScore: state.greenScore + HIT_SCORE,
      });
    },
    [ActionTypes.SHOOTY_LASERS_GREEN_MISS](state, action) {
      return Object.assign({}, state, {
        target: null,
        greenScore: state.greenScore + MISS_SCORE,
      });
    },
  }),
};
