import React from 'react';

const SideImageLayout = props => (
  <div className={`sideImageLayout flex ${props.className}`}>
    {
            !props.alt ? <div className="img">&nbsp;</div> : null
        }
    <div className={`anchor ${props.anchorClassName}`}>
      {props.children}
    </div>
    {
            props.alt ? <div className="img">&nbsp;</div> : null
        }
  </div>
);

SideImageLayout.propTypes = {
    alt: React.PropTypes.bool,
    anchorClassName: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.element.isRequired,
};

export default SideImageLayout;
