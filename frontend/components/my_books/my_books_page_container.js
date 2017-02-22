import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createBookshelf } from '../../actions/bookshelf_actions';
import MyBooksPage from './my_books_page';
import { hashHistory } from 'react-router';
import { fetchUserBooks } from '../../actions/book_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()).then(redirectToRoot); },
    fetchUserBooks: (userId) => { return dispatch(fetchUserBooks(userId)); },
  };
};

const redirectToRoot = () => {
  return hashHistory.push("/");
};

export default connect (mapStateToProps, mapDispatchToProps)(MyBooksPage);
