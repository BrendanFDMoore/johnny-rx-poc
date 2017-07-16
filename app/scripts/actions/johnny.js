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

/**
 * buttonHold
 *
 * @param {number} pin
 *
 * @returns {Object}
 */
export function buttonHold(pin: number) {
  return {
    type: ActionTypes.JOHNNY_FIVE_BUTTON_HOLD,
    payload: {
      pin,
    },
  };
}

/**
 * ledOn
 *
 * @param {number} pin
 *
 * @returns {Object}
 */
export function ledOn(pin: number) {
  return {
    type: ActionTypes.JOHNNY_FIVE_LED_ON,
    payload: {
      pin,
    },
  };
}

/**
 * ledOff
 *
 * @param {number} pin
 *
 * @returns {Object}
 */
export function ledOff(pin: number) {
  return {
    type: ActionTypes.JOHNNY_FIVE_LED_OFF,
    payload: {
      pin,
    },
  };
}

/**
 * ledBlink
 *
 * @param {number} pin
 * @param {number?} duration
 *
 * @returns {Object}
 */
export function ledBlink(pin: number, duration: number = 500) {
  return {
    type: ActionTypes.JOHNNY_FIVE_LED_BLINK,
    payload: {
      pin,
      duration,
    },
  };
}

/**
 * ledPulse
 *
 * @param {number} pin
 * @param {number?} duration
 *
 * @returns {Object}
 */
export function ledPulse(pin: number, duration: number = 500) {
  return {
    type: ActionTypes.JOHNNY_FIVE_LED_PULSE,
    payload: {
      pin,
      duration,
    },
  };
}
