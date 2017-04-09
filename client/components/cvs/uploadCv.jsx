import React from 'react';
import ErrorMessage from 'components/messages/error';
import SuccessMessage from 'components/messages/success';

class Cvs extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Select a file' };
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
    this.props.upload(this.fileInput.files[0]);
  }

  render() {
    const { isUploading, error, success } = this.props;
    const { name } = this.state;

    return (
      <div>
        <div>
          <label className="btn btn--main btn-file" htmlFor="fileUpload">
            Browse <input id="fileUpload" ref={this.getFileInputRef} type="file" hidden onChange={this.onChange} />
          </label>
          <input ref={this.getFilePathInputRef} type="text" value={name} disabled />
          <button className="btn btn--main" onClick={this.onUpload} disabled={isUploading}>
            {
              isUploading ? 'Loading' : 'Upload'
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
    );
  }
}

Cvs.propTypes = {
  error: React.PropTypes.string,
  success: React.PropTypes.bool,
  upload: React.PropTypes.func.isRequired,
  isUploading: React.PropTypes.bool.isRequired,
};

export default Cvs;
