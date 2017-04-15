import React from 'react';
import Message from './message';

function Success(props) {
  return (
    <Message {...props} title={props.title || 'Success!'} type="success" />
  );
}

Success.propTypes = {
  title: React.PropTypes.string,
};

export default Success;
