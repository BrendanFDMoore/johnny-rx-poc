/**
 * @module Reducers/Root
 * @desc Root Reducers
 */

import app from './app';
import github from './github';
import johnny from './johnny';
import router from './router';
import user from './user';

export default {
  ...app,
  ...github,
  ...johnny,
  ...router,
  ...user,
};
