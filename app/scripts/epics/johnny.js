/**
 * @module Epics/JohnnyFive
 * @desc User
 */

import Rx from 'rxjs';
import io from 'socket.io-client';

import { ActionTypes, JohnnyFiveComponentTypes } from 'constants/index';
import { boardEvent, buttonPress, buttonRelease, buttonHold } from 'actions';

const socketconfig = require('../../../socket/config');

const johnnyFiveEventStream = new Rx.Subject();
const socket = io(socketconfig.ADDRESS);

export function johnnyFiveListener(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_INITIALIZE)
    .first()
    .flatMap(() => {
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
    .filter(e => e.component === JohnnyFiveComponentTypes.button)
    .filter(e => Object.keys(buttonEventActionMap).includes(e.event))
    .map(e => (buttonEventActionMap[e.event](e.pin)));
}

const ledCommandString = (pin: number, event: string, duration?: number) => {
  const durationSegment = duration ? `:${duration}` : '';
  return `${JohnnyFiveComponentTypes.led}:${pin}:${event}${durationSegment}`;
};

export function ledOnCommands(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_LED_ON)
    .map(({ payload: { pin, duration } }) => {
      socket.emit('johnny command', ledCommandString(pin, 'on', duration));
      return true;
    })
    .ignoreElements();
}

export function ledOffCommands(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_LED_OFF)
    .map(({ payload: { pin, duration } }) => {
      socket.emit('johnny command', ledCommandString(pin, 'off', duration));
      return true;
    })
    .ignoreElements();
}

export function ledBlinkCommands(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_LED_BLINK)
    .map(({ payload: { pin, duration } }) => {
      socket.emit('johnny command', ledCommandString(pin, 'blink', duration));
      return true;
    })
    .ignoreElements();
}

export function ledPulseCommands(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_LED_PULSE)
    .map(({ payload: { pin, duration } }) => {
      socket.emit('johnny command', ledCommandString(pin, 'pulse', duration));
      return true;
    })
    .ignoreElements();
}
