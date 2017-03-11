import React from 'react';
import Button from 'components/button/button';

function CaretButton(props) {
    const { onTap, onHover, children } = props;
    return (
        <Button onClick={onTap} className="btn--incognito" onHover={onHover}>
            { children }
            <i className="caret" />
        </Button>
    );
}

CaretButton.propTypes = {
    onTap: React.PropTypes.func.isRequired,
    onHover: React.PropTypes.func.isRequired,
    children: React.PropTypes.object.isRequired,
};

export default CaretButton;
