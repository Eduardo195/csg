import $ from 'jquery';
import React from 'react';

class Overlay extends React.Component {

  componentDidMount() {
    // replace with a react component on app load
    $('#overlay').remove();
    $('html').removeClass('mask');
  }

  render() {
    return (
      <div className={`overlay ${this.props.isVisible ? '' : 'hidden'}`} />
    );
  }
}

Overlay.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
};

export default Overlay;
