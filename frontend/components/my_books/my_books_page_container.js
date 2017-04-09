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

const functionProps = () => {
  return {
    fetchBookshelves, fetchBookshelfBooks, selectBookshelf,
    fetchStatusBooks, fetchUserBooks, receiveErrors
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
  mapStateToProps,
  mapDispatchToProps
)(MyBooksPage);
