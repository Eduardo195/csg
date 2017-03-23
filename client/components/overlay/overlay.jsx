import $ from 'jquery';
import React from 'react';

class Overlay extends React.Component {

  componentDidMount() {
    // replace with a react component on app load
    $('#overlay').remove();
    $('html').removeClass('mask');
    this.props.onMount();
  }

  render() {
    return (
      <div className={`overlay ${this.props.isVisible ? '' : 'hidden'}`} />
    );
  }
}

Overlay.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  onMount: React.PropTypes.func.isRequired,
};

export default Overlay;
