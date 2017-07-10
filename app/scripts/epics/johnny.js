/**
 * @module Epics/JohnnyFive
 * @desc User
 */

import Rx from 'rxjs';
import io from 'socket.io-client';

import { ActionTypes } from 'constants/index';
import { boardEvent, buttonPress, buttonRelease } from 'actions';

export function johnnyFiveListener(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_INITIALIZE)
    .flatMap(() => {
      const johnnyFiveEventStream = new Rx.Subject();
      const socket = io('http://localhost:4444');
      socket.on('johnny event', (event) => {
        johnnyFiveEventStream.next(boardEvent(event));
      });
      return johnnyFiveEventStream;
    });
}

/**
 * transformBoardEventStringToObject
 *
 * @param {string} eventString
 *
 * @returns {Object}
 */
const transformBoardEventStringToObject = (eventString: string) => {
  const eventTags = eventString.split(':');
  return {
    component: eventTags[0],
    pin: eventTags[1],
    event: eventTags[2],
  };
};

export function buttonEvents(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_BOARD_EVENT)
    .map(e => transformBoardEventStringToObject(e.payload.eventType))
    .filter(e => e.component === 'button' && ['press', 'release'].includes(e.event))
    .map(e => (e.event === 'press' ? buttonPress(e.pin) : buttonRelease(e.pin)));
}
