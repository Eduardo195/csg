import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import checkImmutable from 'reducers/reducers.dev';
import DevTools from 'containers/devTools/devTools';

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunkMiddleware, createLogger()),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
);

function configureStore(rootReducer, hotPath) {
  return (initialState) => {
    const store = createStore(
        checkImmutable(rootReducer),
        initialState,
        enhancer,
      );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept(`../${hotPath}.js`, () => {
        const nextRootReducer = require(`../${hotPath}.js`).default; // eslint-disable-line global-require, import/no-dynamic-require
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  };
}

export default configureStore;
