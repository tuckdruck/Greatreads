import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      const copy = Object.assign({}, state);
      copy[action.book.id] = action.book;
      return copy;
    default:
      return state;
  }
};

export default BooksReducer;
