import React from 'react';

class DeleteAccount extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">delete account</h1>
        <h6 className="text-uppercase">warning: There is no going back</h6>
        <form onSubmit={this.onSubmit}>
          <button className="btn btn--main font-weight-bold text-lowercase text-uppercase">
            delete my account
          </button>
        </form>
      </section>
    );
  }
}

DeleteAccount.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default DeleteAccount;
