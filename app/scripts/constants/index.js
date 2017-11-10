// @flow
/**
 * @namespace Constants
 * @desc App constants
 */

import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes: Object = keyMirror({
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  FETCH_POPULAR_REPOS_REQUEST: undefined,
  FETCH_POPULAR_REPOS_SUCCESS: undefined,
  FETCH_POPULAR_REPOS_FAILURE: undefined,
  FETCH_POPULAR_REPOS_CANCEL: undefined,
  CANCEL_FETCH: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,
  JOHNNY_FIVE_INITIALIZE: undefined,
  JOHNNY_FIVE_BOARD_EVENT: undefined,
  JOHNNY_FIVE_BUTTON_PRESS: undefined,
  JOHNNY_FIVE_BUTTON_RELEASE: undefined,
  JOHNNY_FIVE_BUTTON_HOLD: undefined,
  JOHNNY_FIVE_LED_ON: undefined,
  JOHNNY_FIVE_LED_OFF: undefined,
  JOHNNY_FIVE_LED_BLINK: undefined,
  JOHNNY_FIVE_LED_PULSE: undefined,
  SHOOTY_LASERS_START_GAME: undefined,
  SHOOTY_LASERS_STOP_GAME: undefined,
  SHOOTY_LASERS_RED_TARGET: undefined,
  SHOOTY_LASERS_RED_HIT: undefined,
  SHOOTY_LASERS_RED_MISS: undefined,
  SHOOTY_LASERS_GREEN_TARGET: undefined,
  SHOOTY_LASERS_GREEN_HIT: undefined,
  SHOOTY_LASERS_GREEN_MISS: undefined,
});

/**
 * @constant {Object} XHR
 * @memberof Constants
 */
export const XHR: Object = keyMirror({
  SUCCESS: undefined,
  FAIL: undefined,
});

/**
 * @constant {string} LOCATION_CHANGE
 */
export const LOCATION_CHANGE: string = '@@router/LOCATION_CHANGE';

/**
 * @constant {Object} JohnnyFiveComponentTypes
 * @memberof Constants
 */
export const JohnnyFiveComponentTypes: Object = keyMirror({
  button: undefined,
  led: undefined,
});
