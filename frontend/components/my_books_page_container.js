import { connect } from 'react-redux';
import { logout, createBookshelf } from '../actions/session_actions';
import MyBooksPage from './my_books_page';
import { hashHistory } from 'react-router';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()).then(redirectToRoot); },
    createBookshelf: (bookshelf) => { return dispatch(createBookshelf(bookshelf)); }
  };
};

const redirectToRoot = () => {
  return hashHistory.push("/");
};

export default connect (null, mapDispatchToProps)(MyBooksPage);
