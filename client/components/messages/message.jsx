import React from 'react';

function Message(props) {
  return (
    <div className={`alert alert-${props.type}`} role="alert">
      <h4 className="alert-heading bold">{ props.title }</h4>
      { props.children }
    </div>
  );
}

Message.propTypes = {
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.string,
    React.PropTypes.element,
  ]).isRequired,
};

export default Message;
