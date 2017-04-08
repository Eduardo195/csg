import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Index from 'index';

export default function root(configureStore) {
  render((
    <Provider store={configureStore()}>
      <Index />
    </Provider>
  ), document.getElementById('main'));
}
