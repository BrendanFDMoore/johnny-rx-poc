// @flow
/**
 * @module Actions/Johnny
 * @desc Actions for Johnny
 */

import { ActionTypes } from 'constants/index';

/**
 * startGame
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function startGame() {
  return {
    type: ActionTypes.SHOOTY_LASERS_START_GAME,
  };
}

/**
 * stopGame
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function stopGame() {
  return {
    type: ActionTypes.SHOOTY_LASERS_STOP_GAME,
  };
}

/**
 * redTarget
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function redTarget() {
  return {
    type: ActionTypes.SHOOTY_LASERS_RED_TARGET,
  };
}

/**
 * redHit
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function redHit() {
  return {
    type: ActionTypes.SHOOTY_LASERS_RED_HIT,
  };
}

/**
 * redMiss
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function redMiss() {
  return {
    type: ActionTypes.SHOOTY_LASERS_RED_MISS,
  };
}


/**
 * greenTarget
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function greenTarget() {
  return {
    type: ActionTypes.SHOOTY_LASERS_GREEN_TARGET,
  };
}

/**
 * greenHit
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function greenHit() {
  return {
    type: ActionTypes.SHOOTY_LASERS_GREEN_HIT,
  };
}

/**
 * greenMiss
 *
 * @param {string} eventType
 *
 * @returns {Object}
 */
export function greenMiss() {
  return {
    type: ActionTypes.SHOOTY_LASERS_GREEN_MISS,
  };
}

