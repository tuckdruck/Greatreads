import { connect } from 'react-redux'
import App from './app';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
