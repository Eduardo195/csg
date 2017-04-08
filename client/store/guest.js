import reducers from 'reducers/guest';
import configureStore from './configureStore';

export default configureStore(reducers, 'reducers/guest');
