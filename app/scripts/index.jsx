// Polyfills
import 'core-js/shim';
import 'isomorphic-fetch';
import 'classlist-polyfill';
import 'vendor/polyfills';

// Rx
import 'vendor/rxjs';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import store from 'store';
import '../styles/main.scss';

function renderApp(RootComponent) {
  const target = document.getElementById('react');

  /* istanbul ignore if */
  if (target) {
    ReactDOM.render(
      <AppContainer>
        <RootComponent store={store} history={syncHistoryWithStore(browserHistory, store)} />
      </AppContainer>,
      target
    );
  }
}

renderApp(Root);

/* istanbul ignore next  */
if (module.hot) {
  module.hot.accept(
    'containers/Root',
    () => renderApp(require('containers/Root'))
  );
}
