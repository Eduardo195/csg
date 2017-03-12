import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers/reducers';

const enhancer = compose(
      applyMiddleware(thunkMiddleware),
);

export default initialState => createStore(reducers, initialState, enhancer);
