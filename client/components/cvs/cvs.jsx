import React from 'react';
import ErrorMessage from 'components/messages/error';
import UploadCv from './containers/uploadCv';

class Cvs extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { filename, mimetype, size, error, isLoading } = this.props;

    return (
      <div className="jumbotron">
        <div className="container">
          <h1>My Cv</h1>
          <div>
            {
              isLoading ? 'Loading....' : (
                <a target="_blank" rel="noopener noreferrer" href={`/api/cv/${filename}`}>
                  cv ::: { `${filename} - ${mimetype} - ${size} bytes` }
                </a>
              )
            }
            {error && (
              <ErrorMessage>{ error }</ErrorMessage>
            )}
          </div>
          <UploadCv />
        </div>
      </div>
    );
  }
}

Cvs.propTypes = {
  filename: React.PropTypes.string,
  mimetype: React.PropTypes.string,
  size: React.PropTypes.number,
  error: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
  onMount: React.PropTypes.func.isRequired,
};

export default Cvs;
