import { query } from '../helpers';

const SessionService = {
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
};

export default SessionService;
