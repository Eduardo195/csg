import React from 'react';

const SideImageLayout = props => (
  <div className={`sideImageLayout d-flex align-items-stretch flex-grow ${props.className}`}>
    {
      !props.alt ? <div className="img">&nbsp;</div> : null
    }
    <div className={'content flex-grow d-flex flex--column'}>
      {props.children}
    </div>
    {
      props.alt ? <div className="img">&nbsp;</div> : null
    }
  </div>
);

SideImageLayout.propTypes = {
  alt: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.element.isRequired,
};

export default SideImageLayout;
