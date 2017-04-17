import React from 'react';

function ignoreEvent(e) {
  e.preventDefault();
}

class FileInput extends React.Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.onChange = this.onChange.bind(this);
    this.triggerFileInput = this.triggerFileInput.bind(this);
    this.getFileInputRef = (ref) => { this.fileInput = ref; };
  }

  onChange() {  // eslint-disable-line consistent-return
    const file = this.fileInput.files[0] || {};
    const error = this.props.validate(file);

    this.props.handleChange(!error, file);
    this.setState({
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
      error,
    });
  }

  triggerFileInput() {
    this.fileInput.click();
  }


  render() {
    const { isDisabled, label, placeholder } = this.props;
    const { name, error } = this.state;

    return (
      <div>
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn--main-alt-reverse bold" type="button" onClick={this.triggerFileInput}>
              {label}
            </button>
          </span>
          <input
            type="text" className="form-control disabled" placeholder={placeholder} value={name}
            ref={this.getFilePathInputRef} onClick={this.triggerFileInput} onChange={ignoreEvent}
          />
          <input
            id="fileInput" disabled={isDisabled} type="file"
            ref={this.getFileInputRef} onChange={this.onChange} hidden
          />
        </div>
        { error ? (<small>{error}</small>) : null }
      </div>
    );
  }
}

FileInput.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  validate: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  isDisabled: React.PropTypes.bool,
  label: React.PropTypes.string,
};

FileInput.defaultProps = {
  placeholder: 'Select a file',
  label: 'Browse',
};

export default FileInput;
