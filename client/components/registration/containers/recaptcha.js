import { connect } from 'react-redux';
import Recaptcha from 'components/recaptcha/recaptcha';
import { setCaptcha } from 'components/registration/actions/actions';

function mapDispatchToProps(dispatch) {
  return {
    callback(captcha) {
      dispatch(setCaptcha(captcha));
    },
  };
}

export default connect(null, mapDispatchToProps)(Recaptcha);
