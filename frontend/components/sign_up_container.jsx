import SignUp from './sign_up';
import { signup, receiveErrors, login } from '../actions/session_actions';
import { connect } from 'react-redux';
import errorsArray from '../selectors/signup_errors_selector';

const mapStateToProps = state => {
  return {
    errors: errorsArray(state.session.errors)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => { return dispatch(signup(user)); },
    clearErrors: () => { return dispatch(receiveErrors([])); },
    signin: (user) => { return dispatch(login(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
