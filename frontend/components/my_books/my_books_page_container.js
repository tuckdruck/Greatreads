import { connect } from 'react-redux';
import MyBooksPage from './my_books_page';
import { bookshelvesArray } from '../../selectors/bookshelves_selector';
import { fetchBookshelves, selectBookshelf } from '../../actions/bookshelf_actions';
import { fetchBookshelfBooks, fetchStatusBooks, fetchUserBooks } from '../../actions/book_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    selectedBookshelf: state.bookshelf,
    currentUser: state.session.currentUser,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookshelves: (userId) => (dispatch(fetchBookshelves(userId))),
    fetchBookshelfBooks: (bookshelfId) => (
      dispatch(fetchBookshelfBooks(bookshelfId))),
    selectBookshelf: (bookshelf) =>
      (dispatch(selectBookshelf(bookshelf))),
    fetchStatusBooks: (status) => (dispatch(fetchStatusBooks(status))),
    clearErrors: () => (dispatch(receiveErrors([]))),
    fetchUserBooks: (userId) => (dispatch(fetchUserBooks(userId)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyBooksPage);
