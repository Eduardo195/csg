import reducers from 'reducers/candidate';
import configureStore from './configureStore';

export default configureStore(reducers, 'reducers/candidate');
