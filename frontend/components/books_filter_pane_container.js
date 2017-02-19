import { connect } from 'react-redux';
import BooksFilterPane from './books_filter_pane';
import bookshelvesArray from '../selectors/bookshelves_selector';
import { fetchBookshelves, selectBookshelf } from '../actions/bookshelf_actions';
import { fetchBookshelfBooks } from '../actions/book_actions';

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    selectedBookshelf: state.bookshelf
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookshelves: () => { return dispatch(fetchBookshelves()); },
    fetchBookshelfBooks: (bookshelfId) => { return dispatch(fetchBookshelfBooks(bookshelfId)); },
    selectBookshelf: (bookshelf) => { return dispatch(selectBookshelf(bookshelf)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksFilterPane);
