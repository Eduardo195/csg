import $ from 'jquery';

function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail(reject);
  });
}

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
