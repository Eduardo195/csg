import React from 'react';
import { Link as A } from 'react-router';

const Link = ({ href, children }) => (
    <A to={href}>{children}</A>
);

Link.propTypes = {
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
    ]).isRequired,
};

Link.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default Link;
