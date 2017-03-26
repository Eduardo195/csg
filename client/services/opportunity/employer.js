import $ from 'jquery';

function query(params) {
  return new Promise((resolve, reject) => {
    $.ajax(params).done(resolve).fail(reject);
  });
}

const EmployerOpportunityService = {
  post(opportunity) {
    return query({
      url: '/api/opportunity/',
      method: 'POST',
      data: opportunity,
    });
  },
  deleteOpportunity(id) {
    return query({
      url: '/api/opportunity',
      method: 'DELETE',
      data: { id },
    });
  },
  getAll() {
    return query({ url: '/api/opportunity/all' });
  },
};

export default EmployerOpportunityService;
