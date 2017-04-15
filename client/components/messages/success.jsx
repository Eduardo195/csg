import React from 'react';
import Message from './message';

function Success({ title, children }) {
  return (
    <Message title={ title || 'Success!'} type='success'>
      { children }
    </Message>
  )
}

export default Success;
