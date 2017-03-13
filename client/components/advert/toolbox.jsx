import React from 'react';
import Button from 'components/button/button';

function Toolbox(props) {
    const { onTapBold } = props;
    return (
      <div className="toolbox">
        <Button className="btn--incognito" onTap={onTapBold}>B</Button>
      </div>
    );
}

Toolbox.propTypes = {
    onTapBold: React.PropTypes.func.isRequired,
};

export default Toolbox;
