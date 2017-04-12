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
  setPersonal(data) {
    return query({
      url: '/api/profile/personal',
      method: 'POST',
      data,
    });
  },
  setProfessional(data) {
    return query({
      url: '/api/profile/professional',
      method: 'POST',
      data,
    });
  },
  setVisibility(isVisible) {
    return query({
      url: '/api/profile/employerVisibility',
      method: 'POST',
      data: { isVisible },
    });
  },

};

export default ProfileService;
