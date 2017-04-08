import React from 'react';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class Cvs extends React.Component {
  constructor() {
    super();
    this.state = { name: 'smthg' };
    this.onChange = this.onChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.getFileInputRef = (ref) => { this.fileInput = ref; };
  }

  onChange() {
    const file = this.fileInput.files[0];

    this.setState({
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
    });
  }

  onUpload() {
    const fileBlob = this.fileInput.files[0];
    this.props.uploadCv(fileBlob);
  }

  render() {
    const { cv, isLoading, error, success } = this.props;
    const { name } = this.state;

    return (
      <div className="jumbotron">
        <div className="container">
          <h1>My Cv</h1>
          <div>
            cv ::: { cv }
          </div>
          <div>
            <label className="btn btn--main btn-file" htmlFor="fileUpload">
              Browse <input id="fileUpload" ref={this.getFileInputRef} type="file" hidden onChange={this.onChange} />
            </label>
            <input ref={this.getFilePathInputRef} type="text" value={name} disabled />
            <button className="btn btn--main" onClick={this.onUpload} disabled={isLoading}>
              {
                isLoading ? 'Loading' : 'Upload'
              }
            </button>
          </div>
          <div>
            {error && (
              <ErrorMessage>{ error }</ErrorMessage>
            )}
            {success && (
              <SuccessMessage>Cv Uploaded. TODO: Add link to view</SuccessMessage>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Cvs.propTypes = {
  cv: React.PropTypes.string,
  error: React.PropTypes.string,
  success: React.PropTypes.bool,
  isLoading: React.PropTypes.bool.isRequired,
  uploadCv: React.PropTypes.func.isRequired,
};

export default Cvs;
