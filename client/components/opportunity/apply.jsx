import React from 'react';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class Apply extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const id = this.props.params.id;
    const { error, success } = this.props;
    return (
      <div>
        Apply page { id }
        { error && (<ErrorMessage>{ error }</ErrorMessage>) }
        { success && (<SuccessMessage>{ success }</SuccessMessage>) }
        <div className="jumbotron">
          <div className="content">
            <div className="row">
              <form onSubmit={this.onSubmit} className="form">
                <button type="submit" className="btn btn--main">
                  Apply for this opportunity
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Apply.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  success: React.PropTypes.number.isRequired,
  error: React.PropTypes.string.isRequired,
};

export default Apply;
