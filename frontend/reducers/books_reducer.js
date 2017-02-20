import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK } from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
  let copy;
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      copy = Object.assign({}, state);
      copy[action.book.id] = action.book;
      // if (action.book.bookshelves.length < 1) {
      //   delete copy[action.book.id];
      // }
      return copy;
    case REMOVE_BOOK:
      copy = Object.assign({}, state);
      delete copy[action.book.id];
      return copy;
    default:
      return state;
  }
};

export default BooksReducer;
