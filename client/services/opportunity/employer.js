import { query } from '../helpers';

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
      url: '/api/opportunity/',
      method: 'DELETE',
      data: { id },
    });
  },
  getOne(id) {
    return query({
      url: '/api/opportunity',
      data: { id },
    });
  },
  update(data) {
    return query({
      url: '/api/opportunity',
      method: 'PUT',
      data,
    });
  },
  getAll() {
    return query({ url: '/api/opportunities/' });
  },
};

export default EmployerOpportunityService;
