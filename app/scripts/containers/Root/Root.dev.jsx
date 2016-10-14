import 'vendor/reactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from 'routes';

const routes = createRoutes();

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  };

  /* istanbul ignore next */
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
