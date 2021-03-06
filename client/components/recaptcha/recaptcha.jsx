import React from 'react';

const SITE_KEY = '6LdnDxkUAAAAAI5X-qSUodUZ9ksewpSrvg1nP3Um';

class Recaptcha extends React.Component {
  constructor() {
    super();
    this.getCatpchaRef = (ref) => { this.captchaRef = ref; };
  }

  componentDidMount() {
    if (!window.grecaptcha) {
      window.onCatpchaLoad = () => {
        this.renderCaptcha();
      };
    } else {
      this.renderCaptcha();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.resetTimestamp &&
      newProps.resetTimestamp !== this.props.resetTimestamp) {
      this.resetCaptcha();
    }
  }

  resetCaptcha() {
    window.grecaptcha.reset(this.id);
  }

  renderCaptcha() {
    this.captchaId = window.grecaptcha.render(
        this.captchaRef,
      {
        sitekey: SITE_KEY,
        callback: this.props.callback,
        'expired-callback': this.resetCaptcha,
      },
    );
  }


  render() {
    return (
      <div ref={this.getCatpchaRef} className="catpcha" />
    );
  }
}

Recaptcha.propTypes = {
  resetTimestamp: React.PropTypes.number,
  callback: React.PropTypes.func.isRequired,
};

export default Recaptcha;
