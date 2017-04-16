import React from 'react';
import Applications from 'components/applications/candidate/containers/applicationsShort';
import CvBox from './cvBox';
import ClBox from './clBox';

function QuickView() {
  return (
    <div className="quickView d-flex">
      <div className="flex-anchor">
        <Applications />
      </div>
      <div>
        <CvBox />
        <ClBox />
      </div>
    </div>
  );
}

export default QuickView;
