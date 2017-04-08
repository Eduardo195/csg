import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import DevTools from 'containers/devTools/devTools';

export default function root(configureStore, app) {
  render((
    <Provider store={configureStore()}>
      <div>
        { app() }
        <DevTools />
      </div>
    </Provider>
  ), document.getElementById('main'));
}
