import { query } from '../helpers';

const CandidateUploadService = {
  uploadCv(cvBlob) {
    const data = new FormData();
    data.append('file', cvBlob);

    return query({
      url: '/api/upload/cv',
      method: 'POST',
      data,
      contentType: false,
      processData: false,
    });
  },
};

export default CandidateUploadService;
