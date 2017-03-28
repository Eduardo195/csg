import { query } from '../helpers';

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
