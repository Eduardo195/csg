import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import Index from 'index';

render((
  <Provider store={configureStore()}>
    <Index />
  </Provider>
), document.getElementById('main'));
