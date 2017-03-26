import $ from 'jquery';

function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail(reject);
  });
}

const UserService = {
  login(username, password) {
    return query({
      url: '/api/login',
      method: 'POST',
      data: { username, password },
    });
  },
  logout() {
    return query({ url: '/api/logout' });
  },
  restoreSession() {
    return query({ url: '/api/user' });
  },
  delete() {
    return query({ url: '/api/user', method: 'DELETE' });
  },
};

export default UserService;
