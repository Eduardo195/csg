import devStore from './configureStore_dev';
import prodStore from './configureStore_prod';

const storeConfig = process.env.NODE_ENV === 'prod' ? prodStore : devStore;

export default storeConfig;
