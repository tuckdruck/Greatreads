import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import MyBooksPage from './my_books_page';
import { hashHistory } from 'react-router';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()).then(redirectToRoot); }
  };
};

const redirectToRoot = () => {
  return hashHistory.push("/");
};

export default connect (null, mapDispatchToProps)(MyBooksPage);
