/* eslint import/prefer-default-export:0 */
import $ from 'jquery';

export function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail((err) => {
      if (err.status === 401) { // session expired, redirect to login
        window.location = '#/login';
      }
      reject(err);
    });
  });
}
