import { query } from '../helpers';

const ProfileService = {
  getMeta() {
    return query({
      url: '/api/cv/meta',
    });
  },
  getProfile() {
    return query({
      url: '/api/profile',
    });
  },
  setPersonal(personal) {
    return query({
      url: '/api/profile/personal',
      method: 'POST',
      data: personal,
    });
  },
};

export default ProfileService;
