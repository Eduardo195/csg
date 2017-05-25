import React from 'react';
import Link from 'components/link/link';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';
import CvInput from 'components/input/containers/cvInput';

class Cvs extends React.Component {

  constructor() {
    super();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.onMount();
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.canSubmit()) {
      this.props.handleSubmit(this.state.file);
      this.setState({ file: null, isValid: false });
    }
  }

  handleFileChange(isValid, file) {
    this.setState({ isValid, file });
  }

  canSubmit() {
    return !this.props.isUploading
      && !this.props.isLoading
      && this.state
      && this.state.file
      && this.state.isValid;
  }

  render() {
    const {
      filename, mimetype, size, error, isLoading,
      isUploading, uploadError, uploadSuccess,
     } = this.props;

    let cv = 'No Cv uploaded';
    if (filename && mimetype && size) {
      cv = (
        <span>
          Current Cv:&nbsp;
          <Link target="_blank" href={`/api/cv/${filename}`}>
            { filename }
          </Link>
        </span>
      );
    }

    return (
      <section>
        <h1 className="title sectionTitle text-uppercase">My Cv</h1>
        <h6 className="text-uppercase">Manage your cv</h6>
        <div>
          { isLoading ? 'Loading....' : cv }
          {error && (<ErrorMessage>{ error }</ErrorMessage>)}
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <CvInput handleChange={this.handleFileChange} isDisabled={isLoading} />
          </div>
          <button disabled={!this.canSubmit()} className="btn btn--main form-group">
            { isUploading ? 'Uploading...' : 'save cv' }
          </button>
          {uploadError && (<ErrorMessage>{ uploadError }</ErrorMessage>)}
          {uploadSuccess && (<SuccessMessage>File uploaded successfully</SuccessMessage>)}
        </form>
      </section>
    );
  }
}

Cvs.propTypes = {
  filename: React.PropTypes.string,
  mimetype: React.PropTypes.string,
  size: React.PropTypes.number,
  error: React.PropTypes.string,
  uploadError: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
  isUploading: React.PropTypes.bool,
  uploadSuccess: React.PropTypes.bool,
  onMount: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default Cvs;
