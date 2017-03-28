import { query } from '../helpers';

const UserService = {
  login(username, password) {
    return query({
      url: '/api/session',
      method: 'POST',
      data: { username, password },
    });
  },
  logout() {
    return query({ url: '/api/session', method: 'DELETE' });
  },
  restoreSession() {
    return query({ url: '/api/session', method: 'PUT' });
  },
  delete() {
    return query({ url: '/api/account', method: 'DELETE' });
  },
};

export default UserService;
