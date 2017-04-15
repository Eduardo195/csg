import $ from 'jquery';
import React from 'react';
import Link from 'components/link/link';
import ErrorMessage from 'components/messages/error';
import Opportunity from './opportunity';

class View extends React.Component {
  componentDidMount() {
    $.ajax({
      url: '/api/opportunity/',
      data: { id: this.props.params.id },
    }).done(({ success, opportunity, msg }) => {
      this.setState(success ? { opportunity } : { error: msg });
    });
  }

  render() {
    const { opportunity, error } = this.state || {};

    if (error) {
      return (<ErrorMessage> Potato { error }</ErrorMessage>);
    }
    if (!opportunity) {
      return null;
    }
    return (
      <div>
        <Opportunity opportunity={opportunity} />
        <Link href={`/opportunity/${opportunity._id}/apply`} className="btn btn--main"> Apply </Link>
      </div>
    );
  }
}

View.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default View;
