import { connect } from 'react-redux';
import MyBooksIndex from './my_books_index';

import {
  fetchUserBooks, fetchBookshelfBooks, receiveBooks
} from '../../actions/book_actions';

import { fetchBookshelves } from '../../actions/bookshelf_actions';
import { changeLoadedStatus } from '../../actions/load_actions';
import booksArray from '../../selectors/books_selector';

const mapStateToProps = state => {
  return {
    books: booksArray(state.books),
    currentUser: state.session.currentUser,
    selectedBookshelf: state.bookshelf,
    loading: state.loading
  };
};

const functionProps = () => {
  return {
    fetchUserBooks, fetchBookshelfBooks, fetchBookshelves,
    changeLoadedStatus, receiveBooks
  };
};

const mapDispatchToProps = dispatch => {
  const dispatchedPropFunctions = {};

  Object.keys(functionProps()).forEach((key) => {
    dispatchedPropFunctions[key] = (input) => {
      return dispatch(functionProps()[key](input));
    };
  });

  return dispatchedPropFunctions;
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(MyBooksIndex);
