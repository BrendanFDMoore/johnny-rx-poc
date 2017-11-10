/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from 'redux-observable';
import { userLogin, userLogout } from './user';
import { fetchPopularRepos } from './github';
import {
  johnnyFiveListener,
  buttonEvents,
  ledOnCommands,
  ledOffCommands,
  ledBlinkCommands,
  ledPulseCommands
} from './johnny';

import {
  shootyInitListener
} from './shooty';

export default combineEpics(
  userLogin,
  userLogout,
  fetchPopularRepos,
  johnnyFiveListener,
  buttonEvents,
  ledOnCommands,
  ledOffCommands,
  ledBlinkCommands,
  ledPulseCommands,
  shootyInitListener
);
