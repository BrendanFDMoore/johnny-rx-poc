/**
 * @module Epics/JohnnyFive
 * @desc User
 */

import Rx from 'rxjs';
import io from 'socket.io-client';

import { ActionTypes } from 'constants/index';
import { boardEvent, buttonPress, buttonRelease, buttonHold } from 'actions';

const socketconfig = require('../../../socket/config');

export function johnnyFiveListener(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_INITIALIZE)
    .first()
    .flatMap(() => {
      const johnnyFiveEventStream = new Rx.Subject();
      const socket = io(socketconfig.ADDRESS);
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

const buttonEventActionMap = {
  press: buttonPress,
  release: buttonRelease,
  hold: buttonHold,
};

export function buttonEvents(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_BOARD_EVENT)
    .map(e => transformBoardEventStringToObject(e.payload.eventType))
    .filter(e => e.component === 'button' && Object.keys(buttonEventActionMap).includes(e.event))
    .map(e => (buttonEventActionMap[e.event](e.pin)));
}
