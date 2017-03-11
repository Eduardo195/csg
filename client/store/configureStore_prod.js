import { createStore } from 'redux';
import reducers from 'reducers/reducers';

export default initialState => createStore(reducers, initialState);
