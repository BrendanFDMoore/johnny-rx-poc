/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from 'redux-observable';
import { userLogin, userLogout } from './user';
import { fetchPopularRepos } from './github';
import { johnnyFiveListener, buttonEvents } from './johnny';

export default combineEpics(
  userLogin,
  userLogout,
  fetchPopularRepos,
  johnnyFiveListener,
  buttonEvents
);
