import { connect } from 'react-redux';
import BooksFilterPane from './books_filter_pane';
import { bookshelvesArray } from '../selectors/bookshelves_selector';
import { fetchBookshelves, selectBookshelf } from '../actions/bookshelf_actions';
import { fetchBookshelfBooks, fetchStatusBooks } from '../actions/book_actions';

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    selectedBookshelf: state.bookshelf,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookshelves: (userId) => { return dispatch(fetchBookshelves(userId)); },
    fetchBookshelfBooks: (bookshelfId) => { return dispatch(fetchBookshelfBooks(bookshelfId)); },
    selectBookshelf: (bookshelf) => { return dispatch(selectBookshelf(bookshelf)); },
    fetchStatusBooks: (statusName) => { return dispatch(fetchStatusBooks(statusName)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksFilterPane);
