import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// import Index from 'index';

export default function root(configureStore, app) {
  render((
    <Provider store={configureStore()}>
      {/* <Index /> */}
      { app() }
    </Provider>
  ), document.getElementById('main'));
}
