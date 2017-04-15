import React from 'react';

function Message({ title, children, type }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <h4 className="alert-heading bold">{ title }</h4>
      { children }
    </div>
  );
}

Message.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired,
};

export default Message;
