import React from 'react';
import ErrorMessage from 'components/messages/error';
import Application from 'components/application/application';

class Applications extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { error, applications } = this.props;
    return (
      <div className="applications">
        <h1 className="title sectionTitle text-uppercase text-center">My Applications</h1>
        { error && (<ErrorMessage>{ error }</ErrorMessage>) }

        <h2 className="text-uppercase">new</h2>
        <section>
          {
          applications && applications.map(({ opportunity }) => (
            <Application key={opportunity._id} opportunity={opportunity} />
          ))
        }
        </section>

        <h2 className="text-uppercase">Shortlisted</h2>
        <section>
          {
          applications && applications.map(({ opportunity }) => (
            <Application key={opportunity._id} opportunity={opportunity} />
          ))
        }
        </section>

        <h2 className="text-uppercase">Old</h2>
        <section>
          {
          applications && applications.map(({ opportunity }) => (
            <Application key={opportunity._id} opportunity={opportunity} />
          ))
        }
        </section>
      </div>
    );
  }
}

Applications.propTypes = {
  error: React.PropTypes.string,
  applications: React.PropTypes.array,
  onMount: React.PropTypes.func.isRequired,
};

export default Applications;
