import devStore from './configureStore_dev';
import prodStore from './configureStore_prod';

console.log('process.env.NODE_ENV' , process.env.NODE_ENV);
console.log('process.env.USER_TYPE' , process.env.USER_TYPE);

const storeConfig = process.env.NODE_ENV === 'prod' ? prodStore : devStore;

export default storeConfig;
