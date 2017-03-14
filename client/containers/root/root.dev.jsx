import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import Index from 'index';
import DevTools from 'containers/devTools/devTools';

render((
  <Provider store={configureStore()}>
    <div>
      <Index />
      { /* <DevTools /> */ }
    </div>
  </Provider>
), document.getElementById('main'));
