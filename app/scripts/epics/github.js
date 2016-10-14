/**
 * @module Epics/userLogin
 * @desc User
 */

import { Observable } from 'rxjs/Observable';

import { ActionTypes } from 'constants/index';

export function fetchPopularRepos(action$) {
  return action$.ofType(ActionTypes.FETCH_POPULAR_REPOS_REQUEST)
    .switchMap(() =>
      Observable.ajax.getJSON('https://api.github.com/search/repositories?q=+language:javascript+created:%3E2016-10-01&sort=stars&order=desc')
        .map(data => ({
          type: ActionTypes.FETCH_POPULAR_REPOS_SUCCESS,
          payload: { data }
        }))
        .takeUntil(action$.ofType(ActionTypes.CANCEL_FETCH))
        .catch(error => [{
          type: ActionTypes.FETCH_POPULAR_REPOS_FAILURE,
          payload: { error },
          error: true
        }])
    );
}
