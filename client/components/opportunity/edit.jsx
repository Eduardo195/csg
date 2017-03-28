import React from 'react';
import OpportunityService from 'services/opportunity/employer';
import ErrorMessage from 'components/messages/error';
import Create from './containers/edit';

class Edit extends React.Component {

  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    OpportunityService.getOne(this.props.params.id).then((rsp) => {
      this.setState({ isLoading: false, error: rsp.msg, opportunity: rsp.opportunity });
    }).catch((err) => {
      this.setState({ isLoading: false, error: err ? err.statusText : 'Unknown error' });
    });
  }

  render() {
    const { params } = this.props;
    const { isLoading, error, opportunity } = this.state;
    return (
      <div>
        { isLoading ? ('Loading ... ') : null}
        { opportunity ? (<Create id={params.id} opportunity={opportunity} />) : null}
        { error ? (<ErrorMessage>{ error }</ErrorMessage>) : null}
        { (!isLoading && !error && !opportunity) ? (
          <ErrorMessage>We dun goofed</ErrorMessage>
        ) : null}
      </div>
    );
  }
}

Edit.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Edit;
