import $ from 'jquery';

export function resetPassword(email, password, hash) {
  return () => {
    $.ajax({
      url: '/api/password/reset',
      data: { email, password, hash },
      method: 'POST',
    }).done(() => {
      console.log('done');
    }).fail((err) => {
      console.error('error', err);
    });
  };
}

export function requestPasswordReset(email) {
  return () => {
    $.ajax({
      url: '/api/password/reset',
      data: { email },
    }).done(() => {
      console.log('done');
    }).fail((err) => {
      console.error('error', err);
    });
  };
}
