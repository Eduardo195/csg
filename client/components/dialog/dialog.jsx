import React from 'react';
import Login from 'components/login/containers/login';
import Registration from 'components/registration/containers/registration';

const dialogMap = {
    login: <Login />,
    register: <Registration />,
};

class Dialog extends React.Component {
    constructor() {
        super();
        this.onClickOverlay = this.onClickOverlay.bind(this);
    }

    onClickOverlay() {
        this.props.hideDialog();
    }

    render() {
        const { config, componentId } = this.props;

        if (!componentId || !config) {
            return null;
        }

        const { title } = config;
        const component = dialogMap[componentId];

        return (
          <div className="dialog">
            <div className="overlay" onClick={this.onClickOverlay} />
            <div className="box">
              <div className="header">
                <h3>{ title }</h3>
              </div>
              <div className="body">
                { component }
              </div>
            </div>
          </div>
        );
    }
}

Dialog.propTypes = {
    config: React.PropTypes.object,
    componentId: React.PropTypes.string,
    hideDialog: React.PropTypes.func.isRequired,
};

export default Dialog;
