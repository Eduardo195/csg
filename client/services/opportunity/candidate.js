import $ from 'jquery';

function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail(reject);
  });
}

const EmployerOpportunityService = {
  apply(opId) {
    return query({
      url: '/api/opportunity/apply',
      method: 'POST',
      data: { opId },
    });
  },
};

export default EmployerOpportunityService;
