import { connect } from 'react-redux';
import MyBooksIndex from './my_books_index';
import { fetchUserBooks, fetchBookshelfBooks, updateBook, removeBook, receiveBooks } from '../../actions/book_actions';
import { fetchBookshelves } from '../../actions/bookshelf_actions';
import { changeLoadedStatus } from '../../actions/load_actions';
import booksArray from '../../selectors/books_selector';
import { bookshelvesArray } from '../../selectors/bookshelves_selector';
import { deleteStatus } from '../../actions/status_actions';

const mapStateToProps = state => {
  return {
    books: booksArray(state.books),
    currentUser: state.session.currentUser,
    bookshelves: bookshelvesArray(state.bookshelves),
    selectedBookshelf: state.bookshelf,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBooks: (userId) => { return dispatch(fetchUserBooks(userId)); },
    fetchBookshelfBooks: (bookshelfId) => { return dispatch(fetchBookshelfBooks(bookshelfId)); },
    fetchBookshelves: (userId) => { return dispatch(fetchBookshelves(userId)); },
    updateBook: (info) => { return dispatch(updateBook(info)); },
    removeBook: (book) => { return dispatch(removeBook(book)); },
    changeLoadedStatus: (bool) => { return dispatch(changeLoadedStatus(bool)); },
    receiveBooks: (books) => { return dispatch(receiveBooks(books)); },
    deleteStatus: (statusId) => { return dispatch(deleteStatus(statusId)); }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyBooksIndex);
