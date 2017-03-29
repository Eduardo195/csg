import { query } from '../helpers';

const UserService = {
  delete() {
    return query({ url: '/api/account', method: 'DELETE' });
  },
};

export default UserService;
