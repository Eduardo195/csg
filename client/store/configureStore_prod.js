import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunkMiddleware));

export default function configureStore(reducers) {
  return initialState => createStore(reducers, initialState, enhancer);
}
