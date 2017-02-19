import { connect } from 'react-redux';
import MyBooksIndex from './my_books_index';
import { fetchUserBooks, fetchBookshelfBooks, updateBook, removeBook, receiveBooks } from '../actions/book_actions';
import { fetchBookshelves } from '../actions/bookshelf_actions';
import { changeLoadedStatus } from '../actions/load_actions';
import booksArray from '../selectors/books_selector';

const mapStateToProps = state => {
  return {
    books: booksArray(state.books),
    currentUser: state.session.currentUser,
    bookshelves: state.bookshelves,
    selectedBookshelf: state.bookshelf,
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBooks: (userId) => { return dispatch(fetchUserBooks(userId)); },
    fetchBookshelfBooks: (bookshelfId) => { return dispatch(fetchBookshelfBooks(bookshelfId)); },
    fetchBookshelves: () => { return dispatch(fetchBookshelves()); },
    updateBook: (info) => { return dispatch(updateBook(info)); },
    removeBook: (book) => { return dispatch(removeBook(book)); },
    changeLoadedStatus: (bool) => { return dispatch(changeLoadedStatus(bool)); },
    receiveBooks: (books) => { return dispatch(receiveBooks(books)); }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyBooksIndex);
