import React from 'react';
import Message from './message';

function Warning(props) {
  return (
    <Message {...props} title={props.title || 'Warning'} type="warning" />
  );
}

Warning.propTypes = {
  title: React.PropTypes.string,
};

export default Warning;
