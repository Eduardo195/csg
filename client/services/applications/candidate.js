import { query } from '../helpers';

export default {
  getAll() {
    return query({
      url: '/api/applications',
    });
  },
};
