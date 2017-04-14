import React from 'react';
import Applications from 'components/applications/candidate/containers/applicationsShort';

class QuickView extends React.Component {
  render() {
    return (
      <div className="quickView">
        <Applications />
      </div>
    );
  }
}

QuickView.propTypes = {
};

export default QuickView;
