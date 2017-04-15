import React from 'react';
import Message from './message';

function Warning({ title, children }) {
  return (
    <Message title={ title || "Warning"} type="warning">
      { children }
    </Message>
  )
}

export default Warning;
