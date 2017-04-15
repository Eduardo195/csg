import React from 'react';
import Message from './message';

function Error({ title, children }) {
  return (
    <Message title={ title || "Error!"} type="danger">
      { children }
    </Message>
  )
}

export default Error;
