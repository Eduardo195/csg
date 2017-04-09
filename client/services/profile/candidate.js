import { query } from '../helpers';

const ProfileService = {
  getMeta() {
    return query({
      url: '/api/cv/meta',
    });
  },
};

export default ProfileService;
