import React from 'react';
import Message from './message';

function Error(props) {
  return (
    <Message {...props} title={props.title || 'Error!'} type="danger" />
  );
}

Error.propTypes = {
  title: React.PropTypes.string,
};

export default Error;
