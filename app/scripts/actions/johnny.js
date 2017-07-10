// @flow
/**
 * @module Actions/Johnny
 * @desc Actions for Johnny
 */

import { ActionTypes } from 'constants/index';

/**
 * initializeJohnnyFive
 *
 * @returns {Object}
 */
export function initializeJohnnyFive() {
  return {
    type: ActionTypes.JOHNNY_FIVE_INITIALIZE,
  };
}

/**
 * boardEvent
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function boardEvent(eventType: string) {
  return {
    type: ActionTypes.JOHNNY_FIVE_BOARD_EVENT,
    payload: {
      eventType,
    },
  };
}

/**
 * buttonPress
 *
 * @param {number} pin
 *
 * @returns {Object}
 */
export function buttonPress(pin: number) {
  return {
    type: ActionTypes.JOHNNY_FIVE_BUTTON_PRESS,
    payload: {
      pin,
    },
  };
}

/**
 * buttonRelease
 *
 * @param {number} pin
 *
 * @returns {Object}
 */
export function buttonRelease(pin: number) {
  return {
    type: ActionTypes.JOHNNY_FIVE_BUTTON_RELEASE,
    payload: {
      pin,
    },
  };
}
