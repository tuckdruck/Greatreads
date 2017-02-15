import SignUp from './sign_up';
import { signup } from '../actions/session_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => { return dispatch(signup(user)); }
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
