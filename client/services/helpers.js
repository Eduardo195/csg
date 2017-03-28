/* eslint import/prefer-default-export:0 */
import $ from 'jquery';

export function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail(reject);
  });
}
