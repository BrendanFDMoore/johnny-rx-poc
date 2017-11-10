/**
 * @module Epics/JohnnyFive
 * @desc User
 */

import Rx from 'rxjs';
import io from 'socket.io-client';

import { ActionTypes } from 'constants/index';
import { startGame, stopGame, redTarget, redHit, redMiss, greenTarget, greenHit, greenMiss } from 'actions';

const socketconfig = require('../../../socket/config');

const shootyLasersEventStream = new Rx.Subject();
const socket = io(socketconfig.ADDRESS);

const mapShootyEventToAction = {
  startGame,
  stopGame,
  redTarget,
  redHit,
  redMiss,
  greenTarget,
  greenHit,
  greenMiss,
};

export function shootyInitListener(action$) {
  return action$.ofType(ActionTypes.JOHNNY_FIVE_INITIALIZE)
    .first()
    .flatMap(() => {
      console.log('listening to socket...');
      socket.on('shooty event', (event) => {
        console.log('shooty event received: ', event);
        if (Object.keys(mapShootyEventToAction).includes(event)) {
          shootyLasersEventStream.next(mapShootyEventToAction[event]());
        }
      });
      // socket.on('shooty start game', () => {
      //   shootyLasersEventStream.next(startGame());
      // });
      // socket.on('shooty red target', () => {
      //   shootyLasersEventStream.next(redTarget());
      // });
      // socket.on('shooty red hit', () => {
      //   shootyLasersEventStream.next(redHit());
      // });
      // socket.on('shooty red miss', () => {
      //   shootyLasersEventStream.next(redMiss());
      // });
      // socket.on('shooty green target', () => {
      //   shootyLasersEventStream.next(greenTarget());
      // });
      // socket.on('shooty green hit', () => {
      //   shootyLasersEventStream.next(greenHit());
      // });
      // socket.on('shooty green miss', () => {
      //   shootyLasersEventStream.next(greenMiss());
      // });
      return shootyLasersEventStream;
    });
}
